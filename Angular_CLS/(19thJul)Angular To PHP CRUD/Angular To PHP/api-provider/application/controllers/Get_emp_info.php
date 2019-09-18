<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Get_emp_info extends CI_Controller {
  
  public function index(){
    
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header('Content-Type: application/json');
    
    //loading model for getting all employees
    $this->load->model('get_emp_model');
    $resp = $this->get_emp_model->get_all_emps();
    
    $row_count = $resp->num_rows();
    
    if($row_count > 0){
      $rows = $resp->result_array();
      $response['code'] = 200;
      $response['employees'] = $rows;
      $response['message'] = "Success";
    } else {
      $response['code'] = 204;
      $response['employees'] = array();
      $response['message'] = "Failed";
    }
    
    echo json_encode($response);
    
  }
  
}