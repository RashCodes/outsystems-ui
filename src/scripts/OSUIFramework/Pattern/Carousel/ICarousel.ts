// eslint-disable-next-line @typescript-eslint/no-unused-vars
namespace OSUIFramework.Patterns.Carousel {
	/**
	 * Defines the interface for OutSystemsUI Carousel Pattern
	 */
	export interface ICarousel extends Interface.IPattern {
		goTo(index: number);
		next();
		previous();
		registerProviderCallback(eventName: string, callback: OSUIFramework.Callbacks.OSGeneric): void;
		toggleDrag(hasDrag: boolean);
		updateOnRender();
	}
}