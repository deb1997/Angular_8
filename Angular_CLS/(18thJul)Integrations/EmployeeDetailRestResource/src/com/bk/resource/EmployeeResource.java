package com.bk.resource;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

import com.bk.Dao.MiniDatbase;
import com.bk.Emp.Employee;
import com.bk.errore.EmployeeNotFoundException;

@Path("/empService")
public class EmployeeResource {
	MiniDatbase md = null;

	/**
	 * this method have tobe called with the following url
	 * http://localhost:9090/EmployeeDetailRestResource/api/empService/getAll
	 * 
	 * this will return a list of employees in either json or xml format
	 * 
	 */
	@GET
	@Path("/getAll")
	@Produces({ "application/json", "application/xml" })
	public List<Employee> getAllEmps() {
		md = new MiniDatbase();
		List<Employee> listemp = md.ListOfEmployee();
		for (Employee employee : listemp) {
			System.out.println(employee);
		}
		return listemp;
	}

	/**
	 * this method have tobe called with the following url
	 * http://localhost:8082/EmployeeDetailRestResource/api/empService/getOne?eno=101&dept=RND
	 * 
	 * this will return a single employee in either json or xml format
	 */

	@GET
	@Path("/getOne")
	@Produces({ "application/json", "application/xml" })
	public Employee getOneEmp(@QueryParam("eno") int eno, @QueryParam("dept") String dept) {
		md = new MiniDatbase();
		Employee e = new Employee();
		System.out.println("Enter Employee no.");
		e.setEno(eno);
		System.out.println("Enter Employee Department");
		e.setDept(dept);
		try {
			e = md.getEmp(e);
			System.out.println(e);

		} catch (EmployeeNotFoundException enf) {
			enf.printStackTrace();
		}
		return e;
	}

	/**
	 * this method have tobe called with the following url
	 * http://localhost:8082/EmployeeDetailRestResource/api/empService/addEmp this
	 * method needs employee obj as param value in either json or xml format this
	 * will return a List of employees in either json or xml format
	 */

	@POST
	@Path("/addEmp")
	@Consumes({ "application/json", "application/xml" })
	@Produces({ "application/json", "application/xml" })
	public List<Employee> addEmp(Employee e) {
		md = new MiniDatbase();
		md.add(e);
		List<Employee> listemp = md.ListOfEmployee();
		return listemp;
	}

	/**
	 * this method have tobe called with the following url
	 * http://localhost:8082/EmployeeDetailRestResource/api/empService/updateEmp?eno=101&dept=RND&newSal=4500
	 * 
	 * this will return a List of employees in either json or xml format
	 */

	@PUT
	@Path("/updateEmp")
	@Consumes({ "application/json", "application/xml" })
	@Produces({ "application/json", "application/xml" })
	public List<Employee> updateEmp(@QueryParam("eno") int eno, @QueryParam("dept") String dept,@QueryParam("newSal") int newSal) {
		Employee e = new Employee();
		md = new MiniDatbase();
		System.out.println("Enter Employee no.");
		e.setEno(eno);
		System.out.println("Enter Employee Department");
		e.setDept(dept);
		try {
			md.updateSal(e,newSal);
		} catch (EmployeeNotFoundException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		List<Employee> listemp = md.ListOfEmployee();
		return listemp;
	}

	/**
	 * this method have tobe called with the following url
	 * http://localhost:8082/EmployeeDetailRestResource/api/empService/deleteEmp?eno=101&dept=RND
	 * 
	 * this will return a List of employees in either json or xml format
	 */

	@DELETE
	@Path("/deleteEmp")
	@Consumes({ "application/json", "application/xml" })
	@Produces({ "application/json", "application/xml" })
	public List<Employee> deleteEmp(@QueryParam("eno") int eno, @QueryParam("dept") String dept) {
		Employee e = new Employee();
		md = new MiniDatbase();
		System.out.println("Enter Employee no.");
		e.setEno(eno);
		System.out.println("Enter Employee Department");
		e.setDept(dept);
		try {
			md.deleteEmp(e);
		} catch (EmployeeNotFoundException en) {
			System.out.println(en.getMessage());
		}
		List<Employee> listemp = md.ListOfEmployee();
		return listemp;
	}

}
