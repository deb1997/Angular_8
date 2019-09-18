<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Add_emp_model extends CI_Model {
  
  public function add_new($data) {
    
    // the TRUE paramater tells CI that you'd like to return the database object.    
    $db1 = $this->load->database('api_db', TRUE);
    
    $res = $db1->insert('emp_tbl', $data);
    
    return $res;
    
  }
  
}

