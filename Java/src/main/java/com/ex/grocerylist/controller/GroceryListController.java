package com.ex.grocerylist.controller;

import com.ex.grocerylist.model.GroceryList;
import com.ex.grocerylist.service.GroceryItemService;
import com.ex.grocerylist.service.GroceryListService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@Controller
public class GroceryListController {

    private GroceryListService groceryListService;
    private GroceryItemService groceryItemService;

    @Autowired
    private void setGroceryListService(GroceryListService groceryListServiceBean){
        this.groceryListService = groceryListServiceBean;
    }

    @Autowired
    private void setGroceryItemService(GroceryItemService groceryItemServiceBean){
        this.groceryItemService = groceryItemServiceBean;
    }

    @GetMapping("/grocery-lists")
    public @ResponseBody ResponseEntity<String> getAllLists(){

        List<GroceryList> groceryLists = this.groceryListService.getAllLists();

        ObjectMapper mapper = new ObjectMapper();

        try {
            String json = mapper.writeValueAsString(groceryLists);

            return ResponseEntity.status(HttpStatus.OK)
                    .header("Content-type", "application/json")
                    .body(json);
        }catch (IOException e){

            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.OK)
                    .header("Content-type","application/json")
                    .body("");
        }
    }

    @PostMapping("/grocery-lists")
    public @ResponseBody ResponseEntity<String> createList(
            HttpServletRequest request,
            HttpServletResponse response,
            @RequestParam String name,
            @RequestParam String description) {

        GroceryList groceryList = new GroceryList(name, description);

        int newId = this.groceryListService.createGroceryList(groceryList);

        return ResponseEntity.status(HttpStatus.CREATED)
                .header("Content-type","application/json")
                .body("{\"id\":"+newId+"}");
    }

    @DeleteMapping("/grocery-lists/{list_id}")
    public @ResponseBody ResponseEntity<String> deleteList(
            HttpServletRequest request,
            HttpServletResponse response,
            @PathVariable(value = "list_id") int id) {

        this.groceryItemService.deleteAllItems(id);
        this.groceryListService.deleteGroceryList(id);

        return ResponseEntity.status(HttpStatus.CREATED)
                .header("Content-type","application/json")
                .body("DELETED");
    }
}
