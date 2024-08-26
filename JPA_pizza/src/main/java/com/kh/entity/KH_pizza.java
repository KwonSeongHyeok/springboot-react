package com.kh.entity;

/* model = dto, entity, vo
 * 기존에 db에 테이블이 존재하는 것을 연결 = dto
 * 기존 db에 테이블이 없어서 생성해줘야할 때 = entity
 * db랑 관계없음 = vo
 * 
 * 
 * */

import jakarta.persistence.Entity; // lombok에도 Entity 존재하기 때문에 표기명시를 자카르타로 확실히 해줘야함
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Entity // 만약에 DB에는 pizzas로 테이블 저장하길 원한다면 @Table 에 이름 명시를 해주면 됨
public class KH_pizza {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String pizzaName;
	private String description;
	private double price;
}
