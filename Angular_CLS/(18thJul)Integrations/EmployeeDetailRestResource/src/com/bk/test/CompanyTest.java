package com.bk.test;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import com.bk.Dao.MiniDatbase;
import com.bk.Emp.Employee;
import com.bk.errore.EmployeeNotFoundException;

public class CompanyTest {

	public static void main(String[] args){
		MiniDatbase md=new MiniDatbase();
		Scanner scn=new Scanner(System.in);
		while(true) {
		System.out.println("Choose option below to perform Operation");
		System.out.println("1 : for ADD Employee");
		System.out.println("2 : for GET Employee");
		System.out.println("3 : for Update the balance of employee");
		System.out.println("4 : to remove the Employee");
		System.out.println("5 : to Get the details list Of Employee");
		int option=scn.nextInt();
		switch (option) {
		case 1:{
			Employee e=new Employee();
			System.out.println("Enter Employee no.");
			e.setEno(scn.nextInt());
			System.out.println("Enter Employee Ename");
			e.setEname(scn.next());scn.nextLine();
			System.out.println("Enter Employee Address");
			e.setAddrs(scn.nextLine());
			System.out.println("Enter Employee Department");
			e.setDept(scn.next());
			System.out.println("Enter Employee Salary");
			e.setSal(scn.nextInt());
			md.add(e);
			break;
			
		}
		
		case 2:{
			Employee e=new Employee();
			System.out.println("Enter Employee no.");
			e.setEno(scn.nextInt());
			System.out.println("Enter Employee Department");
			e.setDept(scn.next());
			try {
			e=md.getEmp(e);
			System.out.println(e);
			break;
			}
			catch(EmployeeNotFoundException en) {
				System.out.println(en.getMessage());
			}
		}
		
		case 3:{
			Employee e=new Employee();
			System.out.println("Enter Employee no.");
			e.setEno(scn.nextInt());
			System.out.println("Enter Employee Department");
			e.setDept(scn.next());
			System.out.println("Enter Employee salary to be incremented");
			int newSal=scn.nextInt();
			try {
				md.updateSal(e,newSal);
			break;
			}
			catch(EmployeeNotFoundException en) {
				System.out.println(en.getMessage());
		    }
		}
		
		case 4:{
			Employee e=new Employee();
			System.out.println("Enter Employee no.");
			e.setEno(scn.nextInt());
			System.out.println("Enter Employee Department");
			e.setDept(scn.next());
			try {
				md.deleteEmp(e);
			break;
			}
			catch(EmployeeNotFoundException en) {
				System.out.println(en.getMessage());
			}
		}
		
		case 5:{
			List<Employee> listemp=md.ListOfEmployee();
			for (Employee employee : listemp) {
				System.out.println(employee);
			}
		}
			

		default:{
			System.out.println("you have entered wrong option please provide proper option");
		}
			break;
		}//switch
	}//while
	
	}

}
