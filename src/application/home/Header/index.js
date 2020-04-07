import React from 'react';
import {Container,Segment,Menu,Header,Icon,Input,Image} from 'semantic-ui-react'

function SoulHeader(){
    const Item=Menu.Item
    const k='zq.png' //707070
    return(
        <Container>
            <Segment basic>
        
                <Menu secondary stackable>
                    <Item as='a'>
                        <Header  position='left' > 
                            <Image className='img'   src={require('../../../asset/img/titleimg1.png')} /> 
                            <Image className='img'  src={require(`../../../asset/img/${k}`)} /> 
                         </Header>
                    </Item>
                    <Item>
                        <Input icon='search' type='text' placeholder='Search...' />
                    </Item>
                    <Menu.Menu position='right'>
                        <Item as='a' to='/home'  ><Icon color='grey' name='home' /><span>首页</span></Item>
                        <Item as='a' to='/book'  ><Icon color='grey' name='book'/><span>读书</span></Item>
                        <Item as='a' to='/idea'  ><Icon color='grey' name='idea' /><span>分类</span></Item>
                        <Item as='a' to='/tags'  ><Icon color='grey' name='tags' /><span>标签</span></Item>
                        <Item as='a' to='/record'><Icon color='grey' name='clone'/><span>归档</span></Item>
                        <Item as='a' to='/dev'   ><Icon color='grey' name='calendar check outline'/>开发日记</Item>
                        <Item as='a' to='/about' ><Icon color='grey' name='info' /><span>关于我</span></Item>
                    </Menu.Menu>
                </Menu>
            </Segment>
        </Container>
        
    )
}
export default SoulHeader