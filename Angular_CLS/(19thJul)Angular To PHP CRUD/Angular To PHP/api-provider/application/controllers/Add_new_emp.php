<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Add_new_emp extends CI_Controller {

  public function index(){

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header('Content-Type: application/json');

    // hold the resonse data
    $response = array();
    
    // getting data from client
    $json_data = file_get_contents("php://input");

    // validate the json schema
    if( json_validator($json_data) !== TRUE){
      $response['code'] = 210;
      $response['employees'] = array();
      $response['message'] = "Invalid JSON Data";

      echo json_encode($response);
      exit();
    }

    // converting json to object
    $obj_data = json_decode($json_data);

    $data_to_insert = array();
    $data_to_insert['ename'] = ( !empty($obj_data->ename) )?$obj_data->ename:NULL;
    $data_to_insert['sal']   = ( !empty($obj_data->sal) )?$obj_data->sal:NULL;
    $data_to_insert['addrs'] = ( !empty($obj_data->addrs) )?$obj_data->addrs:NULL;
    $data_to_insert['dept']  = ( !empty($obj_data->dept) )?$obj_data->dept:NULL;

    //loading model class to add new employee
    $this->load->model('add_emp_model');
    $res = $this->add_emp_model->add_new($data_to_insert);

    if( $res == 1 ) {

      //loading model for get all employees
      $this->load->model('get_emp_model');
      $resp = $this->get_emp_model->get_all_emps();

      $row_count = $resp->num_rows();

      if($row_count > 0) {
        $rows = $resp->result_array();
        $response['code'] = 200;
        $response['employees'] = $rows;
        $response['message'] = "Success";
      } else {
        $response['code'] = 204;
        $response['employees'] = array();
        $response['message'] = "Failed";
      }

    } else {
      $response['code'] = 205;
      $response['employees'] = array();
      $response['message'] = "Adding new employee has some problem !";
    }

    echo json_encode($response);

  }

}