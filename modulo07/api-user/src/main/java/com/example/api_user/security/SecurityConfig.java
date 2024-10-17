package com.example.api_user.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationConverter;
import org.springframework.security.oauth2.server.resource.authentication.JwtGrantedAuthoritiesConverter;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.example.api_user.service.CustomUserDetailsService;

/**
 * Configuração de segurança da aplicação utilizando Spring Security.
 */

@Configuration // Indica que essa classe é uma configuração do Spring
@EnableWebSecurity // Ativa a segurança na aplicação
public class SecurityConfig {
    private final JwtAuthenticationFilter jwtAuthFilter;
    private final CustomUserDetailsService customUserDetailsService;

    
    /**
     * Construtor da classe que recebe dependências injetadas.
     *
     * @param jwtAuthFilter           Filtro para autenticação via JWT.
     * @param customUserDetailsService Serviço para gerenciamento de usuários personalizados.
     */
    public SecurityConfig(JwtAuthenticationFilter jwtAuthFilter,
                          CustomUserDetailsService customUserDetailsService){
        this.jwtAuthFilter = jwtAuthFilter;
        this.customUserDetailsService = customUserDetailsService;
    }

    /**
     * Configura o AuthenticationManager, responsável por gerenciar as autenticações.
     *
     * @param config Configuração de autenticação.
     * @return AuthenticationManager gerenciado.
     * @throws Exception Caso ocorra um erro ao criar o AuthenticationManager.
     */
    
    @Bean
    public AuthenticationManager authenticationManager
            (AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }

    /**
     * Define o encoder para senhas, utilizando BCrypt.
     *
     * @return Instância de BCryptPasswordEncoder.
     */
    
    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    /**
     * Configura o AuthenticationProvider que utiliza o serviço de usuários personalizados
     * e um encoder de senhas.
     *
     * @return AuthenticationProvider configurado.
     */
    
    @Bean
    public AuthenticationProvider authenticationProvider(){
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(customUserDetailsService);
        authProvider.setPasswordEncoder(passwordEncoder());

        return authProvider;
    }
    
    /**
     * Configura a cadeia de filtros de segurança.
     * Define as permissões de acesso e integra o OAuth2 com JWT.
     *
     * @param http Objeto HttpSecurity para configurar a segurança HTTP.
     * @return SecurityFilterChain configurada.
     * @throws Exception Caso ocorra um erro na configuração.
     */
    
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/auth/**").permitAll()
                        .requestMatchers("/api/**").authenticated()
                        .anyRequest().authenticated()
                )
                .oauth2ResourceServer(oauth2 -> oauth2.jwt(jwt -> jwt
                		.jwtAuthenticationConverter(jwtAuthenticationConverter())))
                .authenticationProvider(authenticationProvider())
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
    
    /**
     * Configura o conversor de autenticação JWT para extrair as autoridades do token.
     *
     * @return JwtAuthenticationConverter configurado.
     */
    
    @Bean
    public JwtAuthenticationConverter jwtAuthenticationConverter() {
    	JwtGrantedAuthoritiesConverter grantedAuthoritiesConverter = new JwtGrantedAuthoritiesConverter();
    	grantedAuthoritiesConverter.setAuthoritiesClaimName("role"); // Define o nome do claim que contém as autoridades
    	grantedAuthoritiesConverter.setAuthorityPrefix("ROLE_"); // Prefixa as autoridades com "ROLE_"
    	
    	JwtAuthenticationConverter jwtAuthenticationConverter = new JwtAuthenticationConverter();
    	jwtAuthenticationConverter.setJwtGrantedAuthoritiesConverter(grantedAuthoritiesConverter); // Define o conversor de autoridades
    	
    	return jwtAuthenticationConverter;
    }
}
