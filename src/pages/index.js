import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

import Head from 'next/head';

const Home = () => {
	return (
		<>
			<Head>
				<title>Portfolio of Juan Muñoz Medina</title>
				<meta name="description" content="Portfolio de Juan Muñoz Medina" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>
				<Hero />
				<About />
				<Skills />
				<Projects />
				<Contact />
			</div>
		</>
	);
};

export default Home;