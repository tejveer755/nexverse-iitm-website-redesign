"use client";

import { motion } from "framer-motion";
import Image from "next/image";
type Event = {
	id: number;
	title: string;
	description: string;
	category: string;
	date: string;
	location: string;
	image: string;
	featured?: boolean;
};

const events: Event[] = [
	{
		id: 1,
		title: "NexHack 1.0 - National Hackathon",
		description:
			"A 24-hour national level hackathon focused on building real-world AI and tech solutions.",
		category: "Hackathon",
		date: "26-27 Sept 2025",
		location: "IITM Campus",
		image: "/event_img_3.JPG",
		featured: true,
	},
	{
		id: 2,
		title: "AI Workshop",
		description:
			"Hands-on workshop covering fundamentals of AI, ML, and practical implementation.",
		category: "Workshop",
		date: "Aug 2025",
		location: "Seminar Hall",
		image: "/event_img_3.JPG",
	},
	{
		id: 3,
		title: "Startup Seminar",
		description:
			"Learn how to build and scale startups from experienced founders and mentors.",
		category: "Seminar",
		date: "July 2025",
		location: "Auditorium",
		image: "/event_img_3.JPG",
	},
	{
		id: 4,
		title: "Tech Talk: Web3",
		description:
			"Deep dive into blockchain, Web3 ecosystem, and future of decentralized apps.",
		category: "Tech Talk",
		date: "June 2025",
		location: "Online",
		image: "/event_img_3.JPG",
	},
];

export default function EventsPage() {
	const featured = events.find((e) => e.featured);

	return (
		<div className="bg-black text-white min-h-screen">
			<section className="relative py-28 px-6 md:px-12 text-left ml-6 pt-32">
				<h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-medium  leading-tight  uppercase text-clip bg-clip-text text-transparent bg-gradient-to-tl from-cyan-800 via-cyan-300 to-cyan-100 border-b-2 mb-6 border-white  max-w-fit">
					 Events
				</h1>
				<p className="text-gray-400 max-w-xl ">
					Hackathons, workshops, seminars, and more — all in one place.
				</p>
			</section>

			{/* FEATURED - NEXHACK */}
			{featured && (
				<section className="px-6 md:px-12 mb-20">
					<motion.div
						whileHover={{ scale: 1.01 }}
						className="relative rounded-3xl overflow-hidden border border-zinc-700"
					>
						<Image
							src={featured.image}
							alt={featured.title}
							width={1200}
							height={500}
							className="w-full h-[350px] object-cover opacity-60"
						/>

						<div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
							<span className="bg-cyan-500 text-black px-3 py-1 rounded-full text-sm w-fit mb-3">
								Featured Hackathon
							</span>

							<h2 className="text-3xl md:text-4xl font-bold mb-2">
								{featured.title}
							</h2>

							<p className="text-gray-300 mb-3">
								{featured.date} • {featured.location}
							</p>

							<button className="bg-white text-black px-6 py-2 rounded-full w-fit">
								Register Now
							</button>
						</div>
					</motion.div>
				</section>
			)}

			{/* CATEGORY FILTER */}
			<section className="px-6 md:px-12 mb-10">
				<div className="flex flex-wrap gap-3 justify-center">
					{["All", "Hackathon", "Workshop", "Seminar", "Tech Talk"].map(
						(cat) => (
							<button
								key={cat}
								className="px-4 py-2 rounded-full bg-zinc-800 hover:bg-cyan-500 hover:text-black transition"
							>
								{cat}
							</button>
						)
					)}
				</div>
			</section>

			{/* EVENTS GRID */}
			<section className="px-6 md:px-12 pb-20">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
					{events.map((event) => (
						<motion.div
							key={event.id}
							whileHover={{ y: -8 }}
							className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-cyan-500/40 transition"
						>
							<Image
								src={event.image}
								alt={event.title}
								width={400}
								height={250}
								className="w-full h-[200px] object-cover"
							/>

							<div className="p-5 flex flex-col gap-2">

								{/* category */}
								<span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded w-fit">
									{event.category}
								</span>

								{/* title */}
								<h3 className="text-lg font-semibold">
									{event.title}
								</h3>

								{/* description */}
								<p className="text-gray-400 text-sm line-clamp-2">
									{event.description}
								</p>

								{/* meta */}
								<div className="mt-2 text-xs text-gray-500 flex flex-col">
									<span>{event.date}</span>
									<span>{event.location}</span>
								</div>

							</div>
						</motion.div>
					))}
				</div>
			</section>
		</div>
	);
}
