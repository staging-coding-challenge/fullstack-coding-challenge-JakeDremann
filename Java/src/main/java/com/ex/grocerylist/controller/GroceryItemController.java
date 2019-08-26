package com.ex.grocerylist.controller;

import com.ex.grocerylist.model.GroceryItem;
import com.ex.grocerylist.model.GroceryList;
import com.ex.grocerylist.service.GroceryItemService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

import org.json.*;

@RestController
public class GroceryItemController {

    private GroceryItemService groceryItemService;

    @Autowired
    private void setGroceryItemService(GroceryItemService groceryItemServiceBean){
        this.groceryItemService = groceryItemServiceBean;
    }

    @PostMapping("/grocery-list/{list_id}/items")
    public @ResponseBody ResponseEntity<String> addItem(
            HttpServletRequest request,
            HttpServletResponse response,
            @PathVariable(value="list_id") int list_id,
            @RequestParam String item,
            @RequestParam String type){

        GroceryItem groceryItem = new GroceryItem(list_id, item, type);

        int newId = this.groceryItemService.addItemToList(groceryItem);

        return ResponseEntity.status(HttpStatus.CREATED)
                .header("Content-type","application/json")
                .body("{\"id\":"+newId+"}");
    }

    @DeleteMapping("/grocery-list/items/{item_id}")
    public @ResponseBody ResponseEntity<String> deleteItem(
            HttpServletRequest request,
            HttpServletResponse response,
            @PathVariable(value="item_id") int id){

        this.groceryItemService.deleteItem(id);

        return ResponseEntity.status(HttpStatus.OK)
                .header("Content-type","application/json")
                .body("DELETED");
    }

    @DeleteMapping("/grocery-list/{list_id}/all")
    public @ResponseBody ResponseEntity<String> deleteAllItems(
            HttpServletRequest request,
            HttpServletResponse response,
            @PathVariable(value="list_id") int id){

        this.groceryItemService.deleteAllItems(id);

        return ResponseEntity.status(HttpStatus.OK)
                .header("Content-type","application/json")
                .body("DELETED");
    }

    @GetMapping("/grocery-list/{list_id}")
    public @ResponseBody ResponseEntity<String> getAllItemsForList(
            HttpServletRequest request,
            HttpServletResponse response,
            @PathVariable(value = "list_id") int id) {

        List<GroceryItem> groceryItems = this.groceryItemService.getByList(id);

        ObjectMapper mapper = new ObjectMapper();

        try {
            String json = mapper.writeValueAsString(groceryItems);

            return ResponseEntity.status(HttpStatus.OK)
                    .header("Content-type","application/json")
                    .body(json);

        }catch(IOException e){
            e.printStackTrace();

            return ResponseEntity.status(HttpStatus.OK)
                    .header("Content-type","application/json")
                    .body("");
        }
    }
}
