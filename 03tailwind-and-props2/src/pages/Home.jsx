import React from 'react'
import Layout from '../components/Layout/layout'
import Hero from '../components/Home-comp/Hero'
import Heading from '../components/Home-comp/Heading'
import Card from '../components/Home-comp/Card'

function Home() {
    return (
        <Layout> 
           < Hero />
           <Heading />
           <div className='container mx-auto  grid md:grid-cols-3 gap-3'>
           <Card blogImage= "/Images/computer.avif"  blogTitle="blog Title" blogDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi."/>
           <Card blogImage= "/Images/computer.avif"  blogTitle="blog Title" blogDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi."/>
           <Card blogImage= "/Images/computer.avif"  blogTitle="blog Title" blogDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi."/>
           </div>
           
            </ Layout>
    )
}

export default Home
