package com.ex.grocerylist.service;

import com.ex.grocerylist.model.GroceryList;
import com.ex.grocerylist.repository.GroceryListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service("GroceryListServiceBean")
@Transactional
public class GroceryListService {

    private GroceryListRepository groceryListRepository;

    @Autowired
    private void setGroceryListRepository(GroceryListRepository groceryListRepositoryBean){
        this.groceryListRepository = groceryListRepositoryBean;
    }

    public List<GroceryList> getAllLists(){
        return this.groceryListRepository.getAllLists();
    }

    public int createGroceryList(GroceryList groceryList){
        return this.groceryListRepository.createGroceryList(groceryList);
    }

    public void deleteGroceryList(int list_id){
        this.groceryListRepository.deleteGroceryList(list_id);
    }

    public GroceryList getList(int list_id) {
        return this.groceryListRepository.getList(list_id).get(0);
    }
}
