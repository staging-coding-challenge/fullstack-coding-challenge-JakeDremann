package com.ex.grocerylist.model;

import javax.persistence.*;
import javax.transaction.Transactional;

@Entity
@Table(name="grocery_item")
@Transactional
public class GroceryItem {

    @ManyToOne
    @JoinColumn(name="list_id", insertable = false, updatable = false)
    private GroceryList groceryList;

    @Column(name = "item_id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int item_id;

    @Column(name="list_id")
    private int list_id;

    @Column(name="item")
    private String item;

    @Column(name="type")
    private String type;


    public GroceryItem(){

    }

    public GroceryItem(int list_id, String item, String type){

        this.list_id = list_id;
        this.item = item;
        this.type = type;
    }

    public int getItem_id() {
        return item_id;
    }

    public int getList_id() {
        return list_id;
    }

    public void setList_id(int list_id) {
        this.list_id = list_id;
    }

    public void setItem_id(int item_id) {
        this.item_id = item_id;
    }

    public String getItem() {
        return item;
    }

    public void setItem(String item) {
        this.item = item;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
