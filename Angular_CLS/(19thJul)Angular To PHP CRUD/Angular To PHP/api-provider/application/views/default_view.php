<!DOCTYPE html>
<html>
<head>
  <title>Api Provider</title>
  <style>
    p{
      font-size: 20px;
    }
    a{
      text-decoration: none;
    }
  </style>
</head>
<body>
  <p>
    <strong>Employee Info: </strong> <a href="http://localhost/api-provider/rest/employees">http://localhost/api-provider/rest/employees</a>
    <ol>
      <strong style="font-size: 20px;"> --- JSON Keys --- </strong>
      <li>eno</li>
      <li>ename</li>
      <li>sal</li>
      <li>addrs</li>
      <li>dept</li>
    </ol>
  </p>
  <p>
    <strong>Add Employee Info: </strong> <a href="http://localhost/api-provider/rest/employees/add">http://localhost/api-provider/rest/employees/add</a>
    <ol>
      <strong style="font-size: 20px;"> --- JSON Keys --- </strong>
      <li>ename : String</li>
      <li>sal: Decimal</li>
      <li>addrs : String</li>
      <li>dept : Sales / HR / Production / R&D</li>
    </ol>
  </p>
</body>
</html>
