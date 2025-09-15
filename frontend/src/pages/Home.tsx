import { Appbar } from "@/components/Appbar"
import { HomeStories } from "@/components/HomeStories"
import { Sidebar } from "@/components/Sidebar";
import axios from "axios";
import { useEffect, useState } from "react";
import type { Post } from "@/components/HomeStories";
import { jwtDecode } from "jwt-decode";
import { HomeStoriesSkeleton } from "@/components/HomeStoriesSkeleton";


const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export type toggleprop = {
    expanded?: boolean;
    toggle: () => void;
}




export const Home =({expanded, toggle}: toggleprop) => {

    const token: string = localStorage.getItem('token') ?? "";
    const [body, setBody] = useState<{ Posts: Post[]}>({ Posts: []});
    const [loading, setLoading] = useState(true);

    // if(!token){
    //     return <div>
    //         <div className="flex h-screen w-screen justify-center items-center">
    //             <h1>Not logged In</h1>
    //         </div>
    //     </div>
    // }



    useEffect(() => {

        const decodedtoken = jwtDecode(token) as { username?: string } | null;
        const username = decodedtoken?.username ?? "Anonymous";

        localStorage.setItem('username', username);

        const fetchData = async () => {
            try {
                const res = await axios.get(`${BACKEND_URL}/blog/bulk`, {
                    headers: {
                        Authorization: token
                    }
                });
                setBody(res.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }finally{
                setLoading(false);
            }
        };
    
        fetchData();

    }, []);
    

    return (
        <>
            <Appbar pageType="Home" toggle={toggle}/>
            <div className="flex flex-row  relative max-h-[calc(100vh-60px)]">
                <div className={` transition-all duration-500 ease-in-out overflow-hidden ${expanded ? ' absolute z-20 left-0 w-[65vw] lg:relative  lg:w-[30vw]' : ' absolute z-10 lg:relative -left-80 w-0'}`}>
                    <Sidebar/>
                </div>
                <div className="w-full flex justify-center">
                <div className="w-full lg:max-w-[80vw] flex flex-row h-[calc(100vh-60px)] px-5">
                    <div className="flex justify-center w-full  h-auto">
                        {!loading? <HomeStories Posts={body.Posts}/>:<HomeStoriesSkeleton/>}
                    </div>
                    <div className="hidden lg:block bg-background text-primary border border-l ml-1 w-97 max-h-[calc(100vh-60px)] px-5 pt-10 pr-5 overflow-y-auto scrollbar-modern ">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium consequuntur omnis, possimus natus dignissimos veniam. Eveniet dolorum saepe tenetur veniam quaerat fugit distinctio ipsum commodi laudantium eligendi, excepturi omnis rerum!
                        Odit dolorum provident est incidunt, neque ratione quo eaque illo odio praesentium maiores sint. Doloribus, totam exercitationem. Ipsum obcaecati provident voluptate quo ratione alias debitis! Incidunt velit dignissimos consequatur hic!
                        Atque dignissimos officia repellat omnis sunt, nobis accusantium dolorem perspiciatis? Inventore quam nemo, eius, eum ad assumenda qui, vel dolore necessitatibus minus laboriosam iure. Voluptas illo inventore architecto temporibus iste?
                        Rem harum perspiciatis optio reiciendis officiis porro aliquid maiores minima, minus quis magni quae ex ratione corrupti, in neque atque rerum suscipit mollitia? Commodi, esse placeat aperiam voluptas quam tempora.
                        Cum asperiores ut aliquid voluptatibus veniam. Explicabo corporis accusantium error vero assumenda, totam enim praesentium dolor fugit amet non magni dolorem placeat officia modi exercitationem eaque ipsam, expedita quod? Ipsum!
                        Eum est vitae quidem nesciunt eveniet dolor voluptas, reprehenderit pariatur ipsum dolorum laudantium aliquid facere iusto nulla suscipit sed dignissimos maxime iste officiis deleniti ad repudiandae! Consectetur voluptatem illo aliquam!
                        Aliquid, ipsa laborum obcaecati atque earum incidunt sit id minima exercitationem! Fuga tempore reprehenderit eius minus nam id ad velit consequuntur autem, cum incidunt voluptatem aspernatur illo consectetur ipsum tempora.
                        Perspiciatis dolorem quia magni, dicta perferendis est laudantium, aspernatur distinctio corporis inventore hic accusamus corrupti molestiae? Non, doloremque reprehenderit! Suscipit, nostrum a fugiat alias magnam rem pariatur modi repudiandae maxime.
                        Cum, unde. Nihil expedita dolorum voluptatem velit, necessitatibus repellat asperiores quibusdam officiis nobis commodi possimus aliquam! Soluta consectetur ducimus, expedita amet reiciendis saepe commodi facilis distinctio unde natus tempora corrupti?
                        Veritatis reprehenderit iste maxime soluta magnam labore, inventore et doloremque eius sunt similique quisquam, enim pariatur rerum praesentium nostrum cupiditate vel deserunt odio? Natus cumque esse blanditiis sapiente ad cupiditate?
                        Minima itaque quisquam dolore doloribus ab corporis ea sint praesentium. Et, accusamus laborum? Quis officia error, illum et atque eos velit corporis, eveniet maiores deleniti, tempore consequatur! Earum, necessitatibus dicta.
                        Quas saepe assumenda, veniam quibusdam fuga aliquam? Velit omnis labore excepturi officia perferendis unde quibusdam. Reiciendis nisi harum quaerat repellat voluptatem itaque. Voluptate explicabo illo autem. Et consectetur quaerat a.
                        Architecto, dolore veniam suscipit nobis sapiente perspiciatis neque quod officia sunt, cum laborum et ex cupiditate vero vel nisi animi beatae odit fugiat quibusdam dolores ullam ea iusto. Alias, eligendi?
                        Voluptate amet molestiae aut minima sapiente hic explicabo natus doloribus, quis maiores ullam accusantium dolorum maxime? Necessitatibus molestias itaque illum, eligendi temporibus sapiente facilis. Sed architecto repellat distinctio enim corrupti!
                        Corporis voluptas voluptatum sapiente sed, temporibus delectus consequuntur commodi quos expedita ipsa, veritatis impedit quo sint hic eos minima asperiores velit molestias tempora! Officiis ullam ea vel. Suscipit, optio quaerat.
                        Fuga animi quisquam excepturi impedit. Tenetur adipisci corrupti molestiae molestias atque officiis assumenda fuga minus corporis labore officia sed dignissimos, consectetur, maxime amet voluptatum dolorem maiores deleniti culpa animi magnam!
                        Rerum ipsum assumenda ex, dolores tempore quo. Iusto unde atque nostrum corporis dolore facere nam illum velit quo earum eius, dicta, perspiciatis molestias sint nihil neque nemo enim perferendis totam.
                        Modi dolor porro aliquid quae libero, nemo ullam odit illum repellat laboriosam vel. Illo deserunt mollitia harum at repellendus excepturi cupiditate accusamus dolor dolorum, unde inventore iste, ut tempore quas.
                        Omnis temporibus distinctio, possimus quae asperiores adipisci a quam fuga repudiandae deserunt itaque aut similique, odio nostrum labore blanditiis ad nobis. Eos iure ad aliquid laboriosam quasi dignissimos id. Vel?
                        Et nisi doloribus sunt dolores, illum ullam sequi facere deserunt eum maxime a iste quas eos eius magnam magni repudiandae facilis earum praesentium accusantium aspernatur quidem fugiat! Nostrum, laborum maiores.
                        In, quia. Itaque dolore tenetur, doloremque quidem rerum minus quibusdam saepe quas aliquid incidunt expedita maiores eveniet et adipisci. Sequi dolorum nemo praesentium minima itaque voluptatum. Temporibus sunt explicabo nesciunt?
                        Ab nobis nihil odio aperiam animi, tempora eveniet delectus labore sequi ex ad vero ipsam earum obcaecati veniam quae perferendis maxime facere facilis praesentium. Labore doloremque nostrum nisi totam a.
                        Aspernatur ratione, minus ipsam veritatis culpa suscipit dolorem temporibus pariatur obcaecati error sequi optio reprehenderit mollitia debitis consectetur quo nemo eaque facilis vel facere aperiam. Nam autem omnis ipsam ab.
                        Nam saepe consequatur repellendus, vel autem laudantium, nobis aut voluptas possimus architecto assumenda suscipit, optio corporis temporibus voluptates tempore maxime quis? Vel dolore, dolor possimus illo praesentium eveniet suscipit est.
                        Quo, veritatis esse vero totam omnis reprehenderit placeat, soluta facilis molestiae quia a nisi, fugit nemo obcaecati velit exercitationem incidunt corporis perspiciatis vel. Omnis, autem dignissimos. Distinctio accusamus deleniti quasi!
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}