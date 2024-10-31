package io.github.henriquejunqueira.api.controller;

import io.github.henriquejunqueira.api.model.Item;
import io.github.henriquejunqueira.api.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ItemController {

    @Autowired
    private ItemService itemService;

    @GetMapping
    public List<Item> exibirItens(){
        return itemService.exibirItens();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Item> exibirItemPorId(@PathVariable Long id){
        Item item = itemService.exibirItemPorId(id);

        return item != null ? ResponseEntity.ok(item) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public Item criarItem(@RequestBody Item item){
        return itemService.criarItem(item);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Item> atualizarItem(@PathVariable Long id, @RequestBody Item item){
        Item atualizarItem = itemService.atualizarItem()
    }

}
