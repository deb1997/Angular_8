<?php

class Get_emp_model extends CI_Model {

  public function get_all_emps() {

    // the TRUE paramater tells CI that you'd like to return the database object.    
    $db1 = $this->load->database('api_db', TRUE);
    
    
    $db1->select("eno,ename,sal,addrs,dept");
    $db1->from('emp_tbl');
    //$this->db->limit("8");
    //$this->db->order_by('name', 'asc');
    $res_set = $db1->get();

    return $res_set;
  }

}
