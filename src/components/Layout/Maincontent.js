import React from 'react'
import WebSiteTraffic from './tiles/website-traffic'
import FullReport from './tiles/full-report'
import Bouncerate from './tiles/bouncerate'
import Roi from './tiles/roi'
import Webscore from './tiles/webscore'
import CustomerChurn from './tiles/customerchurn'
import propTypes from 'prop-types'

function Maincontent({ data }) {
  return (
    <div className="flex flex-wrap justify-evenly p-4">
      <WebSiteTraffic />
      <FullReport />
      <Bouncerate />
      <Roi data={data} />
      <Webscore />
      <CustomerChurn />
    </div>
  )
}
Maincontent.propTypes = {
  data: propTypes.object
}
export default Maincontent
