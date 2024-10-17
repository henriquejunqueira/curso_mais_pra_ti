package com.ecommerce.app.service;

import com.ecommerce.app.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ecommerce.app.dto.ProductDTO;
import com.ecommerce.app.model.Product;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductService {

    @Autowired // faz injeção de dependência automática
    private ProductRepository productRepository;

    public List<ProductDTO> getAllProducts(){
        // retorna a lista de produtos convertidos e coletados
        return productRepository
                .findAll() // pega todos os produto do bd
                .stream() // os produtos são colocados em uma stream
                .map(this::convertToDTO) // cada produto é convertido e abstraído apenas os dados que compõe o DTO
                .collect(Collectors.toList()); // coleta os dados convertidos e transforma em uma lista
    }

    public ProductDTO getProductById(int id){
        Optional<Product> product = productRepository.findById(id);
        return product.map(this::convertToDTO).orElse(null);
    }

    public ProductDTO createProduct(ProductDTO productDTO){
        Product product = new Product();
        product.setNome(productDTO.getNome());
        product.setNota(productDTO.getNota());
        product.setPreco(productDTO.getPreco());
        product.setCor(productDTO.getCor());
        productRepository.save(product);

        return convertToDTO(product);
    }

    public ProductDTO updateProduct(int id, ProductDTO productDTO){
        Optional<Product> productOptional = productRepository.findById(id);
        if(productOptional.isPresent()){
            Product product = productOptional.get();
            product.setNome(productDTO.getNome());
            product.setNota(productDTO.getNota());
            product.setPreco(productDTO.getPreco());
            product.setPreco(productDTO.getPreco());

            productRepository.save(product);

            return convertToDTO(product);
        }

        return null;
    }

    public void deleteProduct(int id){
        productRepository.deleteById(id);
    }

    private ProductDTO convertToDTO(Product product){
        ProductDTO productDTO = new ProductDTO();
        productDTO.setId(product.getId());
        productDTO.setNome(product.getNome());
        productDTO.setNota(product.getNota());
        productDTO.setPreco(product.getPreco());
        productDTO.setCor(product.getCor());

        return productDTO;
    }

}
