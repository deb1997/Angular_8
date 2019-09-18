package com.bk.Emp;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Employee {
    private int eno;
	private String ename;
    private String Addrs;
    private String Dept;
    private int sal;
    
    public Employee() {
		
	}
    public Employee(int eno,String Dept) {
		   this.eno=eno;
		   this.Dept=Dept;
   	}
    
    
	public int getSal() {
		return sal;
	}
	public void setSal(int sal) {
		this.sal = sal;
	}
	public int getEno() {
		return eno;
	}
	public void setEno(int eno) {
		this.eno = eno;
	}
	public String getEname() {
		return ename;
	}
	public void setEname(String ename) {
		this.ename = ename;
	}
	public String getAddrs() {
		return Addrs;
	}
	public void setAddrs(String addrs) {
		Addrs = addrs;
	}
	public String getDept() {
		return Dept;
	}
	public void setDept(String dept) {
		Dept = dept;
	}
	@Override
	public boolean equals(Object obj) {
		  if(obj instanceof Employee) {
			  Employee e=(Employee)obj;
			  System.out.println("inside equals method");
			  if(this.eno==e.eno && this.Dept.equals(e.Dept)) {
				  System.out.println("inside if");
				  return true;
			  }
		  }
		return false;
	}
	
	
	@Override
	public int hashCode() {
		
		return eno;
	}
	@Override
	public String toString() {
		return "[eno=" + eno + ", ename=" + ename + ", Addrs=" + Addrs + ", Dept=" + Dept + ", sal=" + sal
				+ "]";
	}
	
	
	
	
	
}
