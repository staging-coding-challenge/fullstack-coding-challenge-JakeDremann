package com.ex.grocerylist.model;

import javax.persistence.*;
import javax.transaction.Transactional;

@Entity
@Table(name="grocery_list")
@Transactional
public class GroceryList {

    @Id
    @GeneratedValue
    @Column(name="list_id")
    private int list_id;

    @Column(name="list_name")
    private String list_name;

    @Column(name="list_description")
    private String list_description;

    public GroceryList(){

    }

    public GroceryList(String list_name, String list_description){
        this.list_name = list_name;
        this.list_description = list_description;
    }

    public int getList_id() {
        return list_id;
    }

    public void setList_id(int list_id) {
        this.list_id = list_id;
    }

    public String getList_name() {
        return list_name;
    }

    public void setList_name(String list_name) {
        this.list_name = list_name;
    }

    public String getList_description() {
        return list_description;
    }

    public void setList_description(String list_description) {
        this.list_description = list_description;
    }
}
