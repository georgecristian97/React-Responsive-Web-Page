import ProductData from './ProductData'
import classes from  './App.module.css';
import React, { Component } from 'react'

class App extends Component {
  x=[classes.ProductIamge, classes.SelectedProductImage].join(' ');
  y=classes.ProductIamge;
  state = {
    renderImg : ProductData.colorOption[2].imgURL,
    classPos1 : this.x,
    classPos2 : this.y,
    classPos3 : this.y,
    showImgOld: ProductData.colorOption[2].imgURL
  }
  showImg = (pos)=>{
    this.setState({showImgOld: this.state.renderImg});
    this.setState({renderImg: ProductData.colorOption[pos].imgURL});
  }
  showBackImg = ()=>{
    this.setState({renderImg: this.state.showImgOld});
  }
  switchImg = (pos)=>{
    this.setState({renderImg: ProductData.colorOption[pos].imgURL});
    this.setState({showImgOld: this.state.renderImg});
    if (pos===2){
      this.setState({classPos1: this.x});
      this.setState({classPos2: this.y});
      this.setState({classPos3: this.y});
    } 
    else if (pos===1){
      this.setState({classPos1: this.y});
      this.setState({classPos2: this.x});
      this.setState({classPos3: this.y});
    } 
    else if (pos===0){
      this.setState({classPos1: this.y});
      this.setState({classPos2: this.y});
      this.setState({classPos3: this.x});
    } 
  };

  render(){
    console.log('Render called');
    console.log(this.state);
   return (
    <div className="App">
      <header className="App-header">
        <nav className={classes.Topbar}>
          <img src={ProductData.titleImg}
              alt='Amazon Logo'/>
        </nav>
      </header>
      <div className={classes.MainContainer}>
        <div className={classes.ProductPreview}>
            <img src={this.state.renderImg}
                alt='Product Preview'/>
        </div>
        <div className={classes.ProductData}>
            <h1 className={classes.ProductTitle}>{ProductData.title}</h1>
            <p className={classes.ProductDescription}> {ProductData.desciption}</p>
            <h3 className={classes.SectionHeading}>Select color</h3>
            <div>
                <img className={this.state.classPos1} 
                src= {ProductData.colorOption[2].imgURL}
                alt={`${ProductData.colorOption[2].styleName} Colored`}
                onClick={()=>this.switchImg(2)}
                onMouseOver={()=>this.showImg(2)}
                onMouseOut={()=>this.showBackImg()}
                 />
                 <img className={this.state.classPos2} 
                src= {ProductData.colorOption[1].imgURL}
                alt={`${ProductData.colorOption[1].styleName} Colored`}
                onClick={()=>this.switchImg(1)}
                onMouseOver={()=>this.showImg(1)}
                onMouseOut={()=>this.showBackImg()}
                 />
                <img className={this.state.classPos3} 
                src= {ProductData.colorOption[0].imgURL}
                alt={`${ProductData.colorOption[0].styleName} Colored`}
                onClick={()=>this.switchImg(0)}
                onMouseOver={()=>this.showImg(0)}
                onMouseOut={()=>this.showBackImg()}
                 />

            </div>
       
        </div>
      </div>
    </div>
    
  );
  }
}

export default App;
