import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="flex justify-end items-center gap-3 bg-primary p-2 h-[4.3rem]">
        <div className="text-white">
          <p className="text-sm">Speak to a Friendly Routing Expert Now:</p>
          <p className="text-sm text-end">+1-888-552-9045</p>
          <p className="text-sm text-end">Se Habla Español</p>
        </div>
        <div>
          <Button className="bg-secondary hover:bg-secondary">
            FREE TRAIL
          </Button>
        </div>
      </header>

      {/* Navbar Section */}
      <nav className="border-2 p-2 flex justify-between border-b-[1px] max-w-screen">
        <ul className="flex  lg:gap-20 items-center h-[4rem] ">
          {/* logo */}
          <li>
            <img src="/logo.png" alt="Logo" className="w-12 h-12" />
          </li>
          {/* Platform Section */}
          <li>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-none focus:bg-none  hover:text-primary focus:text-black lg:text-lg">
                    Platform
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_.75fr]">
                      <li className="row-span-3 border-r-2">
                        <NavigationMenuLink asChild>
                          <>
                            <ListItem href="/docs" title="Platform Overview">
                              Deliver service customers trust
                            </ListItem>
                            <ListItem
                              href="/docs/installation"
                              title="Route Planning"
                            >
                              Create reliable routes in seconds
                            </ListItem>
                            <ListItem
                              href="/docs/primitives/typography"
                              title="Dispatch and Tracking"
                            >
                              Execute with confidence every day
                            </ListItem>
                            <ListItem
                              href="/docs/primitives/typography"
                              title="Driver Effieciency"
                            >
                              Arrive on time, every time
                            </ListItem>
                            <ListItem
                              href="/docs/primitives/typography"
                              title="Business Operations"
                            >
                              Automate last mile workflows
                            </ListItem>
                            <ListItem
                              href="/docs/primitives/typography"
                              title="Customer Experience"
                            >
                              Earn customer loyaltys
                            </ListItem>
                          </>
                        </NavigationMenuLink>
                      </li>
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <>
                            <ListItem
                              href="/docs"
                              title="Mobile Apps"
                            ></ListItem>
                            <ListItem
                              href="/docs/installation"
                              title="Business Analytics"
                            ></ListItem>
                            <ListItem
                              href="/docs/primitives/typography"
                              title="Integrations"
                            ></ListItem>
                            <ListItem
                              href="/docs/primitives/typography"
                              title="Adds On"
                            ></ListItem>
                            <ListItem
                              href="/docs/primitives/typography"
                              title="Premium Support"
                            ></ListItem>
                            <ListItem
                              href="/docs/primitives/typography"
                              title="Pricing"
                            ></ListItem>

                            <ListItem
                              href="/docs/primitives/typography"
                              title="Free Trails"
                            ></ListItem>
                          </>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </li>
          {/* Solutions Section */}
          <li>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-none focus:bg-none  hover:text-primary focus:text-black lg:text-lg">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[300px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <>
                            <ListItem href="/docs" title="Grow Your Business">
                              Master increasing complexity{" "}
                            </ListItem>
                            <ListItem
                              href="/docs/installation"
                              title="Improve Service"
                            >
                              Exceed customer expectations
                            </ListItem>
                            <ListItem
                              href="/docs/primitives/typography"
                              title="Dispatch and Tracking"
                            >
                              Execute with confidence every day
                            </ListItem>
                            <ListItem
                              href="/docs/primitives/typography"
                              title="Driver Effieciency"
                            >
                              Arrive on time, every time
                            </ListItem>
                            <ListItem
                              href="/docs/primitives/typography"
                              title="Increase Efficiency"
                            >
                              Streamline delivery and service
                            </ListItem>
                            <ListItem
                              href="/docs/primitives/typography"
                              title="Delivery Management"
                            >
                              Deliver more with less
                            </ListItem>
                          </>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </li>
          {/* Services Section */}
          <li>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-none focus:bg-none  hover:text-primary focus:text-black lg:text-lg">
                    For Drivers
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[300px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <>
                            <ListItem
                              href="/docs"
                              title="Multi-stop Route Planner"
                            >
                              Get home on time, every time{" "}
                            </ListItem>
                            <ListItem
                              href="/docs/installation"
                              title="Commercial Vehicle Navigation"
                            >
                              Worry-free truck routes
                            </ListItem>
                          </>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </li>
          {/* Explore Section */}
          <li>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-none focus:bg-none  hover:text-primary focus:text-black lg:text-lg">
                    Explore
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[600px] lg:grid-cols-[1fr_1fr_1fr]">
                      <li className="border-r-2">
                        <NavigationMenuLink asChild>
                          <>
                            <ListItem
                              href="/docs"
                              title="About Route4Me"
                            ></ListItem>
                            <ListItem
                              href="/docs/installation"
                              title="Leadership Team"
                            ></ListItem>
                            <ListItem
                              href="/docs/primitives/typography"
                              title="Our Users"
                            ></ListItem>
                            <ListItem
                              href="/docs/primitives/typography"
                              title="Partner Programs"
                            ></ListItem>
                            <ListItem
                              href="/docs/primitives/typography"
                              title="Academic Programs"
                            >
                              Automate last mile workflows
                            </ListItem>
                            <ListItem
                              href="/docs/primitives/typography"
                              title="Enviromental"
                            >
                              Earn customer loyalty
                            </ListItem>
                          </>
                        </NavigationMenuLink>
                      </li>
                      <li className="border-r-2">
                        <NavigationMenuLink asChild>
                          <>
                            <ListItem href="/docs" title="Blog"></ListItem>
                            <ListItem
                              href="/docs/installation"
                              title="Articles"
                              className="text-gray-400"
                            ></ListItem>
                            <ListItem
                              href="/docs/primitives/typography"
                              title="Case Studies"
                              className="text-gray-400"
                            ></ListItem>
                            <ListItem
                              href="/docs/primitives/typography"
                              title="E Books"
                              className="text-gray-400"
                            ></ListItem>
                            <ListItem
                              href="/docs/primitives/typography"
                              title="News"
                              className="text-gray-400"
                            ></ListItem>
                            <ListItem
                              href="/docs/primitives/typography"
                              title="Videos"
                              className="text-gray-400"
                            ></ListItem>
                            <ListItem
                              href="/docs/primitives/typography"
                              title="Webinars"
                              className="text-gray-400"
                            ></ListItem>
                          </>
                        </NavigationMenuLink>
                      </li>
                      <li className="border-r-0">
                        <NavigationMenuLink asChild>
                          <>
                            <ListItem
                              href="/docs"
                              title="Support Portal"
                            ></ListItem>
                            <ListItem
                              href="/docs/installation"
                              title={"Getting Started"}
                              className="text-gray-400"
                            ></ListItem>
                            <ListItem
                              href="/docs/primitives/typography"
                              title="Admins"
                              className="text-gray-400"
                            ></ListItem>
                            <ListItem
                              href="/docs/primitives/typography"
                              title="Route Planners"
                              className="text-gray-400"
                            ></ListItem>
                            <ListItem
                              href="/docs/primitives/typography"
                              title="Dispatchers"
                              className="text-gray-400"
                            ></ListItem>
                            <ListItem
                              href="/docs/primitives/typography"
                              title="Drivers"
                              className="text-gray-400"
                            ></ListItem>
                            <ListItem
                              href="/docs/primitives/typography"
                              title="Developers"
                              className="text-gray-400"
                            ></ListItem>
                          </>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </li>
          <li>
            <Link to="#" className="text-md text-sm lg:text-lg font-medium">
              Pricing
            </Link>
          </li>
        </ul>
        {/* Sign In Section */}
        <ul className="flex gap-2 items-center h-[4rem]">
          <li>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-none focus:bg-none  hover:text-primary focus:text-black lg:text-lg relative">
                    Contact
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[200px] lg:w-[200px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <>
                            <ListItem
                              href="/docs"
                              title="Multi-stop Route Planner"
                            >
                              Get home on time, every time{" "}
                            </ListItem>
                            <ListItem
                              href="/docs/installation"
                              title="Commercial Vehicle Navigation"
                            >
                              Worry-free truck routes
                            </ListItem>
                          </>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </li>
          <li>
            <Button
              variant="link"
              className="text-black hover:text-primary lg:text-lg"
            >
              Sign In
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent  focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
