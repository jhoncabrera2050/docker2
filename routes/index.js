
import { Router } from "express"
const router = Router()
router.get('/', (req,res) => res.render('index', {title: 'First Website with node js'}))
router.get('/about', (req,res) => res.render('about', { title : 'About me'}))
router.get('/clientes', (req,res) => res.render('clientes', { title : 'Clientes'}))
router.get('/productos', (req,res) => res.render('productos', { title : 'Productos'}))
router.get('/contact', (req,res) => res.render('contact', {title : 'COntact page'}))
router.get('/Nuestros_servicios', (req,res) => res.render('servicios', {title : 'Servicios'}))
router.get('/nosotros', (req,res) => res.render('nosotros', {title : 'nosotros'})) 
router.get('/catalogo', (req,res) => res.render('catalogo', {title : 'catalogo'}))
export default router