package singleton;

import java.io.IOException;
import java.util.Properties;
import java.io.InputStream;

public class ConfigurationManager {

    // Instância única da classe ConfigurationManager para implementar o padrão Singleton
    private static ConfigurationManager instance;

    // Objeto Properties para armazenar as configurações carregadas do arquivo
    private Properties properties;

    // Construtor privado para impedir a criação de instâncias fora da classe
    private ConfigurationManager(){
        // Inicializa o objeto Properties
        this.properties = new Properties();

        // Bloco try-with-resources para garantir que o InputStream seja fechado automaticamente
        try( InputStream input = getClass().getClassLoader().getResourceAsStream("Config.properties")){
            // Verifica se o arquivo de configuração foi encontrado
            if(input == null){
                System.out.println("O arquivo de configurações não foi encontrado.");
                return;
            }

            // Carrega as propriedades do arquivo Config.properties no objeto Properties
            properties.load(input);
        }catch(IOException exception){

            // Trata qualquer exceção de I/O que possa ocorrer durante o carregamento do arquivo
            exception.printStackTrace();
        }
    }

    // Metodo estático que retorna a instância única da classe ConfigurationManager
    public static ConfigurationManager getInstance() {
        // Se a instância ainda não foi criada, cria uma nova instância
        if(instance == null) {
            instance = new ConfigurationManager();
        }

        // Retorna a instância única
        return instance;
    }

    // Metodo para obter o valor de uma propriedade específica com base na chave
    public String getProperty(String key) {
        return properties.getProperty(key);
    }

}
