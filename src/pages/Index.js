import React from 'react'
import Header from '../components/Header'
import StudentList from '../components/StudentList'
import StudentEvaluation from '../components/StudentEvaluation'
import Footer from '../components/Footer'

import { useSelector } from 'react-redux'
export default function Index() {
    const state = useSelector(state => state.ui)
    return (
        <div>
            <Header/>
            {state.tab === 1 ?  <StudentList /> : <StudentEvaluation/>    }
        
            <Footer/>
        </div>
    )
}
