import React from "react"
import { Typography } from "@material-ui/core"

function AboutCalculator() {
  return (
    <section>
      <article>
        <Typography component="h2" variant="h4" gutterBottom>
          What is CTR?
        </Typography>
        <Typography component="p" variant="body1" paragraph>
          Click-through rate (CTR) is the ratio of users who click on a specific
          link to the number of total users who view a page, email, or
          advertisement. It is commonly used to measure the success of an online
          advertising campaign for a particular website as well as the
          effectiveness of email campaigns.
        </Typography>
      </article>
      <article>
        <Typography component="h2" variant="h4" gutterBottom>
          Why use this?
        </Typography>
        <Typography component="p" variant="body1" paragraph>
          The purpose of click-through rates is to measure the ratio of clicks
          to impressions of an online ad or email marketing campaign. Generally
          the higher the CTR the more effective the marketing campaign has been
          at bringing people to a website. Most commercial websites are designed
          to elicit some sort of action, whether it be to buy a book, read a
          news article, watch a music video, or search for a flight. People
          rarely visit websites with the intention of viewing advertisements, in
          the same way that few people watch television to view the
          commercials.[5] While marketers want to know the reaction of the web
          visitor, with current technology it is nearly impossible to quantify
          the emotional reaction to the site and the effect of that site on the
          firm's brand. However, click-through rate is an easy piece of data to
          acquire. The click-through rate measures the proportion of visitors
          who initiated an advertisement that redirected them to another page
          where they might purchase an item or learn more about a product or
          service. Forms of interaction with advertisements other than clicking
          is possible, but rare; "click-through rate" is the most commonly used
          term to describe the efficacy of an advert.
        </Typography>
      </article>
      <article>
        <Typography component="h2" variant="h4" gutterBottom>
          How does this work?
        </Typography>
        <Typography component="p" variant="body1" paragraph>
          The click-through rate of an advertisement is the number of times a
          click is made on the ad, divided by the number of times the ad is
          "served", that is, shown (also called impressions), expressed as a
          percentage.
        </Typography>
      </article>
    </section>
  )
}

export default AboutCalculator
