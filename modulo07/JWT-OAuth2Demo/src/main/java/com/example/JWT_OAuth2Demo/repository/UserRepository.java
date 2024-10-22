package com.example.JWT_OAuth2Demo.repository;
import com.example.JWT_OAuth2Demo.userDocument.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UserRepository extends MongoRepository<User, String> {
    boolean existsByUsername(String username);
    Optional<User> findByUsername(String username);
}
