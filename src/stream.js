import { Router } from 'express'

const router = new Router;

//CREATE
router.post('/', (req, res)=>{
    res
      .status(201)
      .json(req.body)
});

//READ
router.get('/:tipo?', (req, res) =>{
    console.log(req.query.pageSize);
    console.log(req.params.tipo);
    res
      .status(201)
      .json(req.body)
});

//UPDATE
router.patch('/:id?', (req, res)=>{
    alteraMeuProduto(rq.params.id, req.body);
    res
      .status(201)
      .json(req.body)
});

//DELETE
router.delete('/:id?', (req, res)=>{
    deletaMeuProduto(req.params.id);
});

export default router;
