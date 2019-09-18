<?php
/* 
 * Table's names are define here
 */

define("tbl_users", "user_tbl");

function json_validator($data=NULL) {
  if (!empty($data)) {
    @json_decode($data);
    return (json_last_error() === JSON_ERROR_NONE);
  }
  return false;
}