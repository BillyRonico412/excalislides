import { ExcalidrawSlideCreator } from "@/components/ExcalidrawSlideCreator/ExcalidrawSlideCreator"
import { ExcalidrawSlides } from "@/components/ExcalidrawSlides/ExcalidrawSlides"
import { Navbar } from "@/components/Navbar/Navbar"

export const App = () => {
	return (
		<main className="w-[100dvw] h-[100dvh] flex flex-col gap-y-8">
			<div className="border-b border-[--border/20]">
				<Navbar />
			</div>
			<div className="container flex-grow aspect-video">
				<ExcalidrawSlideCreator />
			</div>
			<div className="container">
				<ExcalidrawSlides />
			</div>
		</main>
	)
}
