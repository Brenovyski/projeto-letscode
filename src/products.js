import { Router } from 'express'

const router = new Router;

router.post('/', (req, res)=>{
    res
      .status(201)
      .json(req.body)
});

router.patch('/:id?', (req, res)=>{
    alteraMeuProduto(rq.params.id, req.body);
    res
      .status(201)
      .json(req.body)
});

router.delete('/:id?', (req, res)=>{
    deletaMeuProduto(req.params.id);
});

//GET /produtos/fisico?pageSize=30
router.get('/:tipo?', (req, res) =>{
    console.log(req.query.pageSize);
    console.log(req.params.tipo);
    res
      .status(201)
      .json(req.body)
});

export default router;

