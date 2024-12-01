import React from 'react';
import Container from './container'
import Button from './buttuns'
import Search from './Search';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <section className=''>
      <Container>
        <div className='flex items-center justify-between flex-wrap gap-8 px-6 py-3'>
          <div className='flex items-center gap-8 flex-wrap'>
            <Link className='buttun' to={'/'} >Home</Link>
          </div>
          <div className='flex items-center gap-3 flex-wrap'>
            <Search />
            <Button className='p-3' variant='login'>
              <a href='mailto:mohammadjavadmajlesi313@gmail.com'>Content</a>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default NavBar