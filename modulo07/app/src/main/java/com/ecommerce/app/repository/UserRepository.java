package com.ecommerce.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ecommerce.app.model.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByNome(String nome);

    @Query("SELECT u FROM usuarios u JOIN FETCH u.roles WHERE u.nome = :nome")
    User findByUsernameFetchRoles(@Param("nome") String nome);
}
