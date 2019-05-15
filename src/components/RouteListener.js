import React from "react";

import { withRouter } from "react-router-dom";

/*
const pathEngIdMapping = [
  { path: "/about", engId: 1601333430 },
  { path: "/topics", engId: 1601333430 },
  { path: "/", engId: 1601333430 }
];
*/

const Listener = withRouter(
  class extends React.Component {
    constructor(props) {
      super(props);
      props.history.listen(location => {
        var url = new URL(location.pathname, window.location.href);
        console.log(url.href);
        /*
        const engIdMapping = pathEngIdMapping.find(
          mapping => mapping.path === location.pathname
        );
        */
        // if (engIdMapping) {
        window.lpTag.newPage(url.href, {
          section: [],
          sdes: [
            {
              type: "cart",
              total: 11.7,
              numItems: 6,
              products: [
                {
                  product: {
                    name: "prod1",
                    category: "category",
                    sku: "sku",
                    price: 7.8
                  },
                  quantity: 1
                }
              ]
            }
          ],
          taglets: {
            rendererStub: {
              //divIdsToKeep: { "lp-chat": true }
            }
          }
        });
        // }
      });
    }
    render() {
      return <div>{this.props.children}</div>;
    }
  }
);

export default Listener;
