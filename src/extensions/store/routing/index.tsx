/* Order of imports does matter, will influence route resolving order */
import { registerRootRouting, RoutingArea } from "@dhampir/core";
import { Body, CustomLayout, Footer, Header, Logo } from "@components/layout";
import { MainMenu } from "@components/widgets";
import { ProductDetails } from "@components/custom/ProductDetails";
registerRootRouting([
    {
        id: 'route:store',
        path: 'store/*',
        element: <CustomLayout/>,
        rendering: [
            {
                area: RoutingArea.TOP,
                element: <Header/>,
            },
            {
                area: RoutingArea.TOP_CENTER,
                element: <MainMenu/>,
            },
            {
                area: RoutingArea.TOP_LEFT,
                element: <Logo/>,
            },
            {
                area: RoutingArea.BODY,
                element: <Body/>,
            },
            {
                area: RoutingArea.BOTTOM,
                element: <Footer/>,
            }
        ],
        routes: [{
            id: 'route:products',
            path: 'products/*',
            rendering: [
                {
                    area: RoutingArea.TOP_LEFT,
                    element: <div>SubLogo</div>
                },
                {
                    area: RoutingArea.BODY_LEFT,
                    element: <div>Product List Left</div>
                },
                {
                    area: RoutingArea.BODY_MAIN,
                    element: <div>Welcome to Product List!</div>,
                },
                {
                    area: RoutingArea.BOTTOM_CENTER,
                    element: <div>Footer!</div>,
                }
            ],
            routes: [
                {
                    id: 'route:products:productsDetails',
                    path: ':productId',
                    rendering: [
                        {
                            area: RoutingArea.BOTTOM_LEFT,
                            element: <ProductDetails/>
                        },
                        {
                            area: RoutingArea.BOTTOM_CENTER,
                            element: <div>Footer</div>
                        },
                    ]
                }
            ]
        }],
        navigation: {
            label: 'Online Store'
        },
    },
]);


