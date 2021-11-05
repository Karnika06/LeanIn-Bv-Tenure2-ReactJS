import Navbar from "./Navbar";
import {useState} from "react";
import Blog from "./Blog";


const Home = () => {

     const [blogs, changeBlogs] = useState(
    [
      {id:1,title:"Harry Potter and the Sorcerer's Stone",idb_rating:"9.0", preface:"An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.", content:"An orphaned boy learns on his eleventh birthday that he is son of two powerful wizards and possesses unique magical powers of his own. He is summoned from his life as an unwanted child to become a student at Hogwarts, a school for wizards. There, he meets several friends who become his closest allies and help him discover the truth about his parents' mysterious deaths."},
      {id:2,title:"Harry Potter and the Prisoner of Azkaban",idb_rating:"9.2", preface:"Mystery surrounding an escaped prisoner who poses a dangerous threat to the young wizard.", content:"Harry Potter, Ron and Hermione return to Hogwarts School of Witchcraft and Wizardry for their third year of study, where they delve into the mystery surrounding an escaped prisoner who poses a dangerous threat to the young wizard."},
      {id:3,title:"F.R.I.E.N.D.S.",idb_rating:"10.0", preface:"Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.", content:"Friends is a 90's Comedy TV show, based in Manhattan, about 6 friends who go through just about every life experience imaginable together; love, marriage, divorce, children, heartbreaks, fights, new jobs and job losses and all sorts of drama."},
      {id:4,title:"Bell Bottom",idb_rating:"8.9", preface:"When an Indian commercial airliner is hijacked by terrorists in the mid 1980s, a government agent is tasked with rescuing the 210 hostages.", content:"Bell Bottom is inspired from real life hijacking events in India by Khalistani separatists during the 1980s, such as the Indian Airlines Flight 423, 405 and 421 hijackings. Principal photography began on 20 August 2020."}
    ]
  )
    return ( 


        <div>
                 <Navbar/>
                {
                    blogs.map((blog)=><Blog id={blog.id} title={blog.title} rating={blog.idb_rating} content={blog.content}/>
                    )
                }
        </div>
       
     );
    }
 
export default Home;
