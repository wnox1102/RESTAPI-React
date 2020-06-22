import React from 'react';
import Navbar from './components/layout/navbar'
import Form from './components/form'
import Table from './components/table'
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import EditUser from './components/form_edit';
import HomePage from './components/HomePage';
import './assets/assets/scss/styles.scss'
import './assets/scss/argon-design-system-react.scss';
import Section from './components/layout/section';
import Statistics from './components/Statistics';
function App() {
  /**Simulacion de base de datos de clientes  */
  /*const clients = [
    
    {id:'1', name:'Mark', lastname:'Otto', email:'adw@hotmail.com'},
    {id:'2', name:'Mark', lastname:'Otto', email:'adw@hotmail.com'},
    {id:'3', name:'Mark', lastname:'Otto', email:'adw@hotmail.com'},
    {id:'4', name:'Mark', lastname:'Otto', email:'adw@hotmail.com'},
    {id:'5', name:'Mark', lastname:'Otto', email:'adw@hotmail.com'},
    {id:'6', name:'Mark', lastname:'Otto', email:'adw@hotmail.com'},
    {id:'7', name:'Mark', lastname:'Otto', email:'adw@hotmail.com'},
    {id:'8', name:'Mark', lastname:'Otto', email:'adw@hotmail.com'},
    {id:'9', name:'Mark', lastname:'Otto', email:'adw@hotmail.com'},
    {id:'10', name:'Mark', lastname:'Otto', email:'adw@hotmail.com'},
    {id:'11', name:'Mark', lastname:'Otto', email:'adw@hotmail.com'},
  ]*/
  /** 
   * En el componente Navbar se le esta enviando por props el titulo que mostrara 
   * En el componente Table se le esta enviando por  props los clientes 
   */
  return (
      <>
        <Router>
          <Navbar title='Base de datos'/>
          <Section/>
          <Switch>
            <Route path='/' exact={true} component={HomePage}/>
            <Route component={Form} path='/form/create/user'/>
            <Route component={Table} path='/table/users'/>
            <Route component={EditUser} path='/edit/user/:id'/>
            <Route component={Statistics} path='/statistics'/>
          </Switch>
        </Router>
      </>
  );
}

export default App;
