import React, { Component } from 'react';
import './App.css';
import Layout from '../components/Layout/Layout';
import Home from '../components/Home/Home.js';
import { BrowserRouter, Switch , Route} from 'react-router-dom';
import NotFound from '../components/ErrorPages/NotFound/NotFound';
import InternalServer from '../components/ErrorPages/InternalServer/InternalServer';
import OwnerDetails from '../containers/Owner/OwnerDetails/OwnerDetails';
import asyncComponent from '../hoc/AsyncComponent/AsyncComponent';
import CreateOwner from '../containers/Owner/CreateOwner/CreateOwner';
import DeleteOwner from '../containers/Owner/DeleteOwner/DeleteOwner';
import UpdateOwner from '../containers/Owner/UpdateOwner/UpdateOwner';
const AsyncOwnerList = asyncComponent(()=>{
    return import('./Owner/OwnerList/OwnerList');
})


class App extends Component { 
 render(){
     
     return (
         <BrowserRouter>
            <Layout>
                <Switch>
                <Route path="/" exact component={Home}/> 
                <Route path="/owner-list" component={AsyncOwnerList} />
                <Route path="/deleteOwner/:id" component={DeleteOwner}/>
                <Route path="/ownerDetails/:id" component={OwnerDetails}/>
                <Route path="/updateOwner/:id" component={UpdateOwner}/>
                <Route path="/createOwner" component={CreateOwner}/>
                <Route path="/500" component={InternalServer}/>
                <Route path="*" exact component={NotFound}/>
                </Switch>
        </Layout> 
    </BrowserRouter> 
  );
 }
}

export default App;
