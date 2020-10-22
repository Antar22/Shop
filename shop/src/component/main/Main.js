import React from 'react';
import './Main.css'

class Main extends React.Component{
    render(){
        return(
            <div class="main-container">
                <div class="main-container-header">
                    <small class="products-found">
                        <span>10 Product(s) found.</span>
                    </small>
                    <div class="sort">Order by
                    <select>
                        <option value="">Select</option>
                        <option value="lowestprice">Lowest to highest</option>
                        <option value="highestprice">Highest to lowest</option>
                    </select>
                </div>
            </div>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            </div>
            
        )
    }
}

function Item(){
    return(
        <div class="item">
            <div class="ship">Free shipping</div>
            <div class="hinh">
                <img src="MU.jpg" alt="Cat Tee Black T-Shirt"/>
                <p class="item-name">Áo Manchester United</p>
                <div class="gia-item">
                    <b class="gia-giam">69.000</b>
                    <span class="vnd">đ</span>
                    <span class="discount">30%</span>
                    <p>96.000 đ</p>
                </div>
                <div class="Add-to-cart">Add to cart</div>
                </div>
        </div>
    )
        
    
}

export default Main