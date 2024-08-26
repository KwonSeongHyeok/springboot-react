package com.kh.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.kh.entity.KH_pizza;
import com.kh.service.PizzaService;

@RequestMapping("/api/pizza")
@RestController
public class PizzaController {

	@Autowired
	private PizzaService pizzaService;
	
	@GetMapping
	public List<KH_pizza> getAllPizza(){
		return pizzaService.getAllPizza();
	}
	
	@PostMapping
	public KH_pizza savePizza(@RequestBody KH_pizza p) {
		return pizzaService.createPizza(p);
	}
	
	@GetMapping("/search")
	public List<KH_pizza> searchPizza(@RequestParam("query") String query){
		return pizzaService.searchPizza(query);
	}
}