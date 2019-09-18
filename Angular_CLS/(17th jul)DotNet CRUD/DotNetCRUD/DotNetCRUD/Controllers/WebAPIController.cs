using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data.SqlClient;
using RSNWebAPIs.Models;
using System.Data;

namespace DotNetCRUD.Controllers
{
    public class WebAPIController : ApiController
    {
        SqlConnection con = null;
        SqlCommand cmd = null;
        SqlDataReader dr = null;
        SqlDataAdapter da = null;

        [HttpGet]
        public List<Employees> Fetch()
        {
            con = new SqlConnection("Data Source=(local);Database=rsn;User Id=sa;Password=123");
            string strSqlCommand = "Select * from employees";
            //Opening the connection 
            if (con.State != ConnectionState.Open)
                con.Open();
            //Instantiating the command object 
            cmd = new SqlCommand();
            //Defining the command text & connection via properties 
            cmd.CommandText = strSqlCommand;
            cmd.Connection = con;
            //Executing the command object to get data as recordset 
            // dr = cmd.ExecuteReader();
            da = new SqlDataAdapter(cmd);
            DataTable rsnDT = new DataTable();
            da.Fill(rsnDT);
            List<Employees> emp = new List<Employees>();
            Employees employees = new Employees();
            //if (dr.HasRows)
            //{
            //    while(dr.Read())
            //    {
            //        employees.e_id = Convert.ToInt32(dr["e_id"]);
            //        employees.e_name = Convert.ToString(dr["e_name"]);
            //        employees.e_sal = Convert.ToInt32(dr["e_sal"]);
            //    }
            //}

            if (rsnDT.Rows.Count > 0)
            {
                for (int i = 0; i < rsnDT.Rows.Count; i++)
                {
                    employees = new Employees();
                    employees.e_id = Convert.ToInt32(rsnDT.Rows[i]["e_id"]);
                    employees.e_name = Convert.ToString(rsnDT.Rows[i]["e_name"]);
                    employees.e_sal = Convert.ToInt32(rsnDT.Rows[i]["e_sal"]);
                    emp.Add(employees);
                }
            }
            return emp;
        }



        [HttpPost]
        public string[] Insert([FromBody]Employees employees)
        {
            con = new SqlConnection("Data Source=(local);Database=rsn;User Id=sa;Password=123");
            string strResponse = string.Empty;
            int e_id = employees.e_id;
            string e_name = employees.e_name;
            int e_sal = employees.e_sal;
            //Prepare Sql Insert Query Statement 
            string strSqlCommand = "Insert Into employees (e_id, e_name, e_sal) Values(" + e_id + ", '" + e_name + "', " + e_sal + ")";
            //Opening the connection 
            if (con.State != ConnectionState.Open)
                con.Open();
            //Instantiating the command object 
            cmd = new SqlCommand();
            //Defining the command text & connection via properties 
            cmd.CommandText = strSqlCommand; cmd.Connection = con;
            //Executing the command object to insert data that returns no of rows affected 
            int rowAffected = cmd.ExecuteNonQuery();
            if (rowAffected > 0)
            {
                strResponse = rowAffected + " rows inserted successfully..";


            }
            else
            {
                strResponse = " Insertion failed successfully..";
            }
            con.Close();

            return new string[] { strResponse };
        }

        [HttpPost]
        public string[] Update([FromBody]Employees employees)
        {

            con = new SqlConnection("Data Source=(local);Database=rsn;User Id=sa;Password=123");
            string strResponse = string.Empty;
            int e_id = employees.e_id;
            string e_name = employees.e_name;
            int e_sal = employees.e_sal;
            //Prepare Sql Insert Query Statement 
            string strSqlCommand = "Update employees Set e_name='" + e_name + "', e_sal=" + e_sal + " Where e_id=" + e_id;
            //Opening the connection 
            if (con.State != ConnectionState.Open)
                con.Open();
            //Instantiating the command object 
            cmd = new SqlCommand();
            //Defining the command text & connection via properties 
            cmd.CommandText = strSqlCommand; cmd.Connection = con;
            //Executing the command object to insert data that returns no of rows affected 
            int rowAffected = cmd.ExecuteNonQuery();
            if (rowAffected > 0)
            {
                strResponse = rowAffected + " rows updated successfully..";


            }
            else
            {
                strResponse = "Update failed successfully..";
            }
            con.Close();

            return new string[] { strResponse };
        }

        [HttpPost]
        public string[] Delete([FromBody]Employees employees)
        {
            con = new SqlConnection("Data Source=(local);Database=rsn;User Id=sa;Password=123");
            string strResponse = string.Empty;
            int e_id = employees.e_id;

            //Prepare Sql Insert Query Statement 
            string strSqlCommand = "Delete from employees where e_id=" + e_id;
            //Opening the connection 
            if (con.State != ConnectionState.Open)
                con.Open();
            //Instantiating the command object 
            cmd = new SqlCommand();
            //Defining the command text & connection via properties 
            cmd.CommandText = strSqlCommand; cmd.Connection = con;
            //Executing the command object to insert data that returns no of rows affected 
            int rowAffected = cmd.ExecuteNonQuery();
            if (rowAffected > 0)
            {
                strResponse = rowAffected + " rows deleted successfully..";


            }
            else
            {
                strResponse = "Delete failed.";
            }
            con.Close();

            return new string[] { strResponse };
        }



    }

}
