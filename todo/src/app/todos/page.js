import Navigation from "@/components/navigation"
import styles from '../page.module.css'
import Link from "next/link"
import next from 'next'




export default async function Todopage() {
   
   const allPosts = await fetch('https://jsonplaceholder.typicode.com/posts/1/todos')
                            .then((response) => response.json())

   
    return (
        <div>
            <main>
                <h1>TodoPage</h1>
                <Navigation/>
                <ul>
                    {allPosts.map(post => {
                        return <li>{post.id} {post.title} {post.userId}</li>
                    })}
                </ul>
            </main>
        </div>
    )
}