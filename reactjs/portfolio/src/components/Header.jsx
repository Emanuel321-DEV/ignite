import { useState } from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import { FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa6";
import Logo from "../assets/logo.gif";
export function Header() {
    const [activeTab, setActiveTab] = useState("home");

    const data = [
        {
            label: "Home",
            value: "home",
            desc: `Hello It is the home description`,
        },
        {
            label: "Projects",
            value: "projects",
            desc: `Its is about tab`,
        }
    ];

    return (
        <header className="flex justify-between py-6">
            <nav>
                <Tabs value={activeTab}>
                    <TabsHeader
                        className="rounded-none border-b border-transparent	 bg-transparent p-0 "
                        indicatorProps={{
                            className:
                                "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                        }}
                    >
                        {data.map(({ label, value }) => (
                            <Tab
                                key={value}
                                value={value}
                                onClick={() => setActiveTab(value)}
                                className={activeTab === value ? "text-gray-900 w-28 font-semibold" : "w-28 font-semibold"}
                            >
                                {label}
                            </Tab>
                        ))}
                    </TabsHeader>
                    <TabsBody className="bg-blue-gray-300 w-full my-8">
                        <TabPanel key="home" value="home" className="flex justify-between">
                            <div>
                                <img src={Logo} alt="" srcset="" />
                            </div>
                            <div>
                            <img src={Logo} alt="" srcset="" />
                            </div>
                            
                        </TabPanel>
                        <TabPanel key="projects" value="projects">
                            This is projects tab
                        </TabPanel>
                    </TabsBody>
                </Tabs>
            </nav>
            <div>
                <ul className="flex gap-6 py-1">
                    <li>
                        <a href="https://www.linkedin.com/in/emanuel-henrique-5307b6144/" target="_blank" rel="external">
                            <FaLinkedin
                                color="#0e76a8"
                                fontSize={25}
                                style={{
                                    borderRadius: '10px'
                                }}
                            />
                        </a>
                    </li>
                    <li>
                        <a href=" https://wa.me/5534999268588" target="_blank" rel="external">
                            <FaWhatsapp
                                color="#25D366"
                                fontSize={25}
                            />

                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Emanuel321-DEV" target="_blank" rel="external">
                            <FaGithub
                                color="black"
                                fontSize={25}
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
}