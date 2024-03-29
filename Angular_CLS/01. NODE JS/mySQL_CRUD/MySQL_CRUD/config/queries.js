/*
    this file used to execute the SQL Queries
            @fetch
            @insert
            @update
            @delete
*/
module.exports = {
    fetch:(connection,res)=>{
        connection.query(`select * from products`,
                                    (err,records,fields)=>{
            if(err)
                throw err;
            else
                res.send(records);
        });
    },
    insert:(connection,req,res)=>{
        connection.query(`insert into products values(
            ${req.body.p_id},
            '${req.body.p_name}',
            ${req.body.p_cost}
        )`,(err,result)=>{
            if(err)
                res.send({insert:"fail"});
            else
                res.send({insert:"success"});
        });
    },
    update : (connection,req,res)=>{
        connection.query(`update products set p_name='${req.body.p_name}',p_cost=${req.body.p_cost} where p_id=${req.body.p_id}`,(err,result)=>{
            if(err)
                res.send({update:"fail"});
            else
                res.send({update:"success"})
        });
    },
    delete:(connection,req,res)=>{
        connection.query(`delete from products where p_id=${req.body.p_id}`,(err,result)=>{
            if(err)
                res.send({delete:"fail"});
            else
                res.send({delete:"success"})
        });
    }
};