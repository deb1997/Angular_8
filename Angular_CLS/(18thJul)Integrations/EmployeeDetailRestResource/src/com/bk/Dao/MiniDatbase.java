package com.bk.Dao;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.*;
import com.bk.Emp.Employee;
import com.bk.errore.EmployeeNotFoundException;

public class MiniDatbase {
	static List<Employee> empList = new ArrayList();
	static {
		try {
			empList = readFile();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	/**
	 * *add method for adding Employee obj
	 * 
	 * @param Employee
	 */
	public void add(Employee e) {
		// add the Employee obj to list
		empList.add(e);
		System.out.println("Employee Added");
	}

	public Employee getEmp(Employee e) throws EmployeeNotFoundException {
		int index = empList.indexOf(e);
		System.out.println("index is " + index);
		if (index != -1) {
			Employee e1 = new Employee();
			e1 = empList.get(index);
			return e1;
		} else {
			throw new EmployeeNotFoundException("Employee Not Found");
		}
	}

	public void deleteEmp(Employee e) throws EmployeeNotFoundException {
		int index = empList.indexOf(e);
		if (index != -1) {
			empList.remove(index);
			System.out.println("Employee deleted successfully");
		} else {
			throw new EmployeeNotFoundException("Employee Not Found");
		}
	}

	public void updateSal(Employee e,int incrementSal) throws EmployeeNotFoundException {
		Scanner scn = null;
		// create Scanner ojb
		//scn = new Scanner(System.in);
		int index = empList.indexOf(e);
		if (index != -1) {
			System.out.println("Employee found");
			Employee e1 = new Employee();
			e1 = empList.get(index);
			
			e1.setSal(e1.getSal() + incrementSal);
			empList.set(index, e1);
			System.out.println("Employee salary updated");

		} else {
			throw new EmployeeNotFoundException("Employee Not Found");
		}
	}

	public List<Employee> ListOfEmployee() {
		return empList;

	}

	public static List<Employee> readFile() throws Exception {
		Scanner scn = null;
		File file = null;
		Employee emp = null;
		List<Employee> listemp = null;
		file = new File("C:\\Users\\india\\Desktop\\EmployeeDetailRestResource\\src\\com\\bk\\Dao\\EmployeeDetails.txt");
		listemp = new ArrayList<>();
		scn = new Scanner(file);
		// map=new HashMap<>();
		while (scn.hasNext()) {
			int place = 0;
			emp = new Employee();
			emp.setEno(Integer.parseInt(scn.next()));
			emp.setEname(scn.next());
			emp.setAddrs(scn.next());
			emp.setDept(scn.next());
			emp.setSal(Integer.parseInt(scn.next()));
			// map.put(emp.getName(),emp.getBalance());
			listemp.add(emp);
		}
		return listemp;
	}

}
