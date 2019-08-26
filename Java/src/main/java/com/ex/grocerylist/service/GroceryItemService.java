package com.ex.grocerylist.service;

import com.ex.grocerylist.model.GroceryItem;
import com.ex.grocerylist.repository.GroceryItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("GroceryItemServiceBean")
public class GroceryItemService {

    GroceryItemRepository groceryItemRepository;

    @Autowired
    private void setGroceryItemRepository(GroceryItemRepository groceryItemRepositoryBean){
        this.groceryItemRepository = groceryItemRepositoryBean;
    }

    public List<GroceryItem> getByList(int list_id){
        return this.groceryItemRepository.getByList(list_id);
    }

    public int addItemToList(GroceryItem groceryItem){
        return this.groceryItemRepository.addItemToList(groceryItem);
    }

    public void deleteItem(int item_id) {
        this.groceryItemRepository.deleteItem(item_id);
    }

    public void deleteAllItems(int list_id) {
        this.groceryItemRepository.deleteAllItems(list_id);
    }
}
