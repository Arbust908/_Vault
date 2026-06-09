
## Introduction

Paizo’s Kingmaker Adventure Path was the first published campaign for the Pathfinder RPG, and it was eventually remade for Pathfinder 2e. The AP has long been a community favorite, in part due to the kingdom management mechanics, which have been functionally nonexistent in official DnD/Pathfinder content since at least the launch of 3rd edition DnD in 2001. It’s hard to deny the appeal of turning your overpowered combat monster into a monarch with an army at their back.

These rules are complicated. They involve quite a bit of math, there are significant balance issues, there are numerous trap options, and it’s entirely possible for your kingdom to devolve into anarchy within your first few turns before you can even build a farm to feed your populace. The system also punishes small parties by giving you fewer filled Leadership Roles and fewer Leadership Activities. This isn’t a good system for small parties, and there are many rough edges.

Kingmaker 2e’s Kingdom Rules were developed [almost entirely by James Jacobs](https://paizo.com/threads/rzs43olo?Rules-that-hamper-a-fledgling-kingdom-in-the-AP#5), and then hoping my team can spare some time to edit, I absolutely sympathize. Under the circumstances, I think they’re pretty decent. The linked thread includes some length discussion and several suggestions from James about what he would change or do differently given another chance.

From my discussions online, I’ve seen a lot of folks making homebrew fixes to the system to address the larger pain points. A user on Twitter directed me to [Vance and Kerenshara’s Rule Changes](https://docs.google.com/document/d/1NHksCXkXbjtrv-26VgFHNbyYldatVwag9lM44IWxIXo/edit?usp=sharing), which seem to be pretty popular if the number of people looking at the Google Doc at any one time is any indication. From reading them in depth, I agree with most of the changes, but I’m concerned that it will swing things too far in the opposite direction and make Kingdoms too good at too many things.

This article contains the absolute bare minimum of spoilers. I’m going to rob you of the fun of learning the system for yourself, but I’m not a monster. Also, I haven’t finished playing the campaign yet. You’ll still want access to the Kingmaker Companion Guide and the Kingmaker Player’s Guide, but stay out of the Companion Guide as much as you can because it contains spoilers.

This article also doesn’t address warfare mechanics. Those will need a separate article.

## Table of Contents

-   [Introduction](#introduction)
-   [Understanding RPGBOT’s Rating System](#disclaimer)
-   [Adventuring](#adventuring)
    -   [Time Tracking and Downtime](#time-tracking-and-downtime)
    -   [Hexploration](#hexploration)
    -   [Preparing Hexes](#preparing-hexes)
    -   [Roads](#roads)
    -   [Companions](#companions)
-   [The Basics of Managing a Kingdom in Kingmaker](#the-basics-of-managing-a-kingdom-in-kingmaker)
    -   [Ability Scores / Attributes](#ability-scores-attributes)
        -   [Culture](#culture)
            -   [Culture-based Skills](#culturebased-skills)
        -   [Economy](#economy)
            -   [Economy-based Skills](#economybased-skills)
        -   [Loyalty](#loyalty)
            -   [Attribute Skills](#attribute-skills)
        -   [Stability](#stability)
            -   [Stability-based Skills](#stabilitybased-skills)
    -   [Charter](#charter)
    -   [Heartland](#heartland)
    -   [Government](#government)
    -   [Leadership and Positions](#leadership-and-positions)
        -   [Invested Positions](#invested-positions)
    -   [Ruin / Ruins](#ruin-ruins)
    -   [Unrest](#unrest)
    -   [Kingdom Checks](#kingdom-checks)
        -   [Negotiation DC](#negotiation-dc)
    -   [Fame or Infamy](#fame-or-infamy)
-   [Managing Hexes](#managing-hexes)
    -   [Preparing Hexes](#preparing-hexes-2)
    -   [Claiming Hexes](#claiming-hexes)
    -   [Pledge of Fealty](#pledge-of-fealty)
    -   [Roads](#roads-2)
-   [Managing Settlements](#managing-settlements)
    -   [Location, Location, Location](#location-location-location)
    -   [Influence Radius](#influence-radius)
    -   [Your Capital](#your-capital)
    -   [Structures](#structures)
    -   [Housing](#housing)
    -   [Growth](#growth)
-   [Managing Commodities](#managing-commodities)
    -   [Capacity](#capacity)
    -   [Work Sites](#work-sites)
        -   [Resource Hexes](#resource-hexes)
    -   [Purchase Commodities](#purchase-commodities)
    -   [Food](#food)
    -   [Luxuries](#luxuries)
    -   [Lumber, Ore, and Stone](#lumber-ore-and-stone)
-   [Managing Resource Points (RP)](#managing-resource-points-rp)
    -   [Why Do You Need RP?](#why-do-you-need-rp)
    -   [Resource Point (RP) Sources](#resource-point-rp-sources)
-   [Managing Ruin](#managing-ruin)
    -   [Increasing Ruin Thresholds](#increasing-ruin-thresholds)
    -   [Sources of Ruin](#sources-of-ruin)
    -   [Preventing Ruin](#preventing-ruin)
    -   [Reducing Ruin](#reducing-ruin)
    -   [Removing Ruin Penalties](#removing-ruin-penalties)
    -   [Which Ruin Should I Increase?](#which-ruin-should-i-increase)
-   [Managing Unrest](#managing-unrest)
    -   [Leadership Actions](#leadership-actions)
    -   [Region Activities](#region-activities)
    -   [Civic Activities](#civic-activities)
-   [Managing Events](#managing-events)
-   [Kingdom Advancement](#kingdom-advancement)
    -   [Kingdom Level and XP](#kingdom-level-and-xp)
    -   [Kingdom Features](#kingdom-features)
    -   [Kingdom Feats](#kingdom-feats)
        -   [Level 1 Kingdom Feats](#level-1-kingdom-feats)
        -   [Level 3 Kingdom Feats](#level-3-kingdom-feats)
        -   [Level 7 Kingdom Feats](#level-7-kingdom-feats)
        -   [Level 11 Kingdom Feats](#level-11-kingdom-feats)
-   [Kingdom Turns](#kingdom-turns)
    -   [How Often Do These Happen?](#how-often-do-these-happen)
    -   [How Do I Make Kingdom Turns Faster?](#how-do-i-make-kingdom-turns-faster)
    -   [Kingdom Turn Tracker](#kingdom-turn-tracker)
-   [Other Stuff](#other-stuff)
    -   [Getting to Level 2, Then to Level 3](#getting-to-level-2-then-to-level-3)
    -   [Growth: How Fast?](#growth-how-fast)
    -   [Math: Kingdom Assurance and Trained Skills vs. Control DC](#math-kingdom-assurance-and-trained-skills-vs-control-dc)
    -   [Look for Chains of Bonuses](#look-for-chains-of-bonuses)
    -   [Magic is Great, Engineering is Trash](#magic-is-great-engineering-is-trash)
-   [Too Long; Didn’t Read](#too-long-didnt-read)

## Understanding RPGBOT’s Rating System

RPGBOT uses a 4-tier rating scheme which is simple to understand and easy to read at a glance.

-   Red: Bad, useless options, or options which are extremely situational. Nearly never useful.
-   Orange: OK options, or useful options that only apply in rare circumstances. Useful sometimes.
-   Green: Good options. Useful often.
-   Blue: Fantastic options, often essential to the function of your character. Useful very frequently.

## Adventuring

Your party of adventurers can do a great deal to ensure the success of your kingdom. With very minimal investment, you can be prepared for your Kingdom Turns to be as efficient and effective as possible.

### Time Tracking and Downtime

Kingdom Turns are expected to take place roughly once every month, and players are expected to spend one week every month attending to their duties as a leader (see Leadership Roles on page 18). Of course, it’s totally unclear where you’re expected to be when you spend this downtime. As a GM I would rule that you need to be in one of your kingdom’s settlements.

For this to matter, you’ll need to do some time tracking. Pick a date when the kingdom starts and take notes. A huge number of days will be spent traveling from place to place. The need to travel back to civilization will make things like mounts, roads, and teleportation extremely valuable.

Your group should also discuss how they want to handle Downtime. Kingmaker absolutely requires Downtime, if only for the one week of leadership duties, but if you’re going to travel back to civilization to run the country, you might as well sneak in some other Downtime, too. My recommendation: 1 week of government work, 1 week of Downtime, then spend the rest of the month adventuring. Golarian’s calendar is just the real-world Gregorian calendar with the serial numbers shaved off, so months can range from 28 to 31 days.

### Hexploration

Kingmaker is a hexcrawl. The playable portion of the world is separated into a hex grid, with each hex representing a geographical section of the map. Some portion of those hexes will eventually be your kingdom. But, in order to claim those hexes, they must first be reconnoitered and cleared.

First, you need a basic understanding of the [Hexploration](https://2e.aonprd.com/Rules.aspx?ID=3103) rules, especially the Hexploration Activities. The vast majority of player characters have a land speed of 25 ft, which gives you just 1 Hexploration Activity per day. This means that traveling in difficult terrain can take 2 or 3 days per hex, and reconnoitering a hex will take an entire day.

Get mounts. Horses, ponies, mules, commoners banging coconuts, whatever. Get mounts with a minimum of 30 ft. speed. 30 ft. gets you 2 Hexploration Activities, which fully doubles your efficiency at the cost of a few gold.

In addition, consider the [Efficient Explorer](https://2e.aonprd.com/Feats.aspx?ID=3906) Skill Feat, especially in a large party that can afford to devote Skill Increases to lore skills. An additional Hexploration Activity for the entire party is significant. A total of 3 Hexploration Activities if your party increases their travel speed and someone also takes Efficient Explorer means that your party can race across the landscape, reconnoitering as they go with little worry for time.

Of course, you’ll also need to spend Skill Increases on Lore skills to support this. Hills Lore, Forest Lore, and Plains Lore will see the most return on investment.

### Preparing Hexes

Once you’ve improved your daily Hexploration Activity count, make a habit of reconnoitering hexes at every opportunity unless you’re under specific time pressure (chasing a quest, rushing back to town, etc.). Reconnoitering can tell you if a hex contains valuable resources, terrain features, 

Once a hex is reconnoitered, it needs to be “cleared,” which usually involves fighting something dangerous in the area. You can use the Clear Hex Activity during your Kingdom Turns, but that’s a Region Activity. You get just 3 of those per turn for your entire kingdom, and you need them for things that you can’t do with your party of traveling violence specialists.

A hex that has been both reconnoitered and cleared is now eligible for Claim Hex. See Managing Hexes, below.

### Roads

Once your kingdom is founded and starts to expand, strongly consider building roads through difficult terrain such as forests. Hills and plains are Open Terrain, so you move through at 1 Hex per Hexploration Activity, but other terrain is slower. Roads improve the hex’s terrain by one step, making it more efficient to travel through that hex.

### Companions

Companions are easy to get wrong, but they’re a massively powerful tool for your kingdom. Each companion provides a unique benefit (usually a Leadership Activity) which is stronger than the default options available to you. Gaining Influence with companions and appointing them to their preferred leadership roles will make your Kingdom significantly more effective.

The named Companions, including those who you’ll meet in the very first section of the game, can be helpful additions to your kingdom. Each Companion has one or two Leadership Roles to which they’re well suited, allowing them to automatically Invest those roles. In addition, they’ll offer new Kingdom Activities and possibly new Structures which you can only create if you have that Companion appointed as a leader.

See the Kingmaker Companion Guide for information about individual Companions, though beware that it contains significant spoilers. I’ve included this table below with what you absolutely need.

Name

Requirement

Role(s)

Special

Amiri

–

Warden

Structure: Gladiatorial Arena

Ekundayo

Helpful

General / Warden

Region Activity: Supplementary Hunting

Jubilost

–

Treasurer

Leadership Activity: Process Hidden Fees

Linzi

Friendly

Counselor

Leadership Activity: Spread the Legend

Nok-nok

8 Influence

Emissary

Region Activity: Recruit Monsters

Tristian

8 Influence

Magister

Leadership Activity: Preventative Measures

Valerie

–

General

Leadership Activity: Warfare Exercises

Harrim

8 Influence

Magister

Leadership Activity: Evangelize the End

Jaethal

6 Influence

Emissary

Leadership Activity: Decadent Feasts

Kalikke

4 Influence

Counselor

Leadership Activity: Deliberate Planning

Kanerah

4 Influence

Emissary

Leadership Activity: False Victory

Octavia

6 Influence

Magister

PCs can use a Magic check to attempt any of the following kingdom activities: Celebrate Holiday, Craft Luxuries, Create a Masterpiece, or Rest and Relax.

Regongar

8 Influence

General

Leadership Activity: Show of Force

Amiri and Valerie don’t list what they need to be convinced to help run your Kingdom, so I’m assuming that they’ll just do it. Jubilost explicitly offers the moment that you found your Kingdom. That gives you a minimum of 3 NPCs that can fill and Invest Leadership Roles. In a party of 5, that fills every role immediately, so your party immediately gets +60 XP Milestone reward.

Keep in mind that NPCs in Leadership Roles do not get to perform Leadership Activities. You can fill 6 roles with NPCs, but it is not wise to do so. Find a balance between getting the special benefits that you want and getting enough Leadership Activities. In addition, individual leaders can usually only attempt the same Leadership Activity once per turn, so having more players means that you can attempt powerful actions like [Process Hidden Fees](https://2e.aonprd.com/Actions.aspx?ID=1497) several times in each Kingdom Turn.

## The Basics of Managing a Kingdom in Kingmaker

### Ability Scores / Attributes

Ability Scores work just like they do for characters. You always add one Ability Modifier to any check that you make. And, like a character, you need to decide how you allocate Boosts and Flaws to your Kingdom.

Remember that Pathfinder is a game that rewards specialization over generalization. You can be great at one thing and okay at a couple others, but if you try to be okay at everything you’ll instead be bad at everything. Choose which ability scores appeal to your party most and build around that.

If you’re not sure what to do, build around Culture and Economy. If you really want to go to war, build around Loyalty.

Since Kingmaker was published prior to the Remaster, it still uses the terms “ability scores” and “ability modifiers.” “Ability Modifiers” is interchangeable with “Attributes.”

#### Culture

Culture is the most powerful Ability Score because it’s the basis for the Magic skill, which is the most powerful skill in the game. 

Culture-based checks can receive a Circumstance Bonus for the entire turn when you use the Improve Lifestyles Activity during the Upkeep Phase.

##### Culture-based Skills

-   Art: Great for managing Unrest, crafting Luxuries, and generating Fame/Infamy with Create a Masterpiece.
-   Folklore: Used almost exclusively for Celebrate Holiday.
-   Magic: The most important skill in the game. Supernatural Solution can almost entirely dominate your party’s activities, making Magic checks a replacement for nearly every other skill.
-   Scholarship: Useful exclusively for Creative Solution, which is just Supernatural Solution without Magic. Magic does more, so why invest in Scholarship?

#### Economy

Economy, in my experience, is the most important Ability Score. The Activities which you’ll perform during the Upkeep Phase can’t be replaced using Creative Solution or Supernatural Solution, and those activities are crucial for generating the RP that you’ll need to build powerful buildings and to gain Kingdom Levels.

Economy-based checks can receive a Circumstance Bonus for the entire turn when you use the [Collect Taxes](https://2e.aonprd.com/Actions.aspx?ID=1410) Activity during the Upkeep Phase. Using this on back-to-back turns results in a point of Unrest which you won’t be able to remove before you Trade Commodities and Manage Trade Agreements, so you may not want to do this every turn.

##### Economy-based Skills

-   Boating: Weirdly useful, provided that your capital has a water border. In early turns, Go Fishing allows you to gather Food Commodities until farms become functional. It can also be used to Establish Trade Agreement and to reduce Unrest.
-   Exploration: All about claiming new Hexes. Great in concept, but Claim Hex can be done with magic, and you can handle most of the other uses by playing Pathfinder and going on adventures with your characters.
-   Industry: Primary used to Trade Commodities. Because Trade Commodities happens before your Activity Phase, it can’t be handled with Magic, and it’s very difficult to get a Circumstance Bonus on the check, making Industry irreplaceable.
-   Trade: Primarily used to Manage Trade Agreements and to Purchase Commodities. Because Manage Trade Agreements happens before your Activity Phase, it can’t be handled with Magic, and it’s very difficult to get a Circumstance Bonus on the check, making Trade irreplaceable. Trade also has more Activity options than any other skill, and you outright can’t Collect Taxes if you’re not trained.

#### Loyalty

Culture-based checks can receive a Circumstance Bonus until the end of your next turn (not the end of your current turn) from the Celebrate Holiday action.

##### Attribute Skills

-   Intrigue: With almost as many Activity options as Trade, Intrigue does a lot. Clandestine Business can get you Luxury Commodities and additional RP, and you can reduce Unrest and Ruin with multiple activities. Trained should be plenty to get access to the Trained Activities.
-   Politics: Primarily used to Improve Lifestyle. Like with Trade Commodities and Manage Trade Agreements, Improve Lifestyle is performed before the Activity Phase and can’t be handled with magic, and it’s very difficult to get a Circumstance Bonus on the check. The benefit is a Circumstance bonus to Culture-based checks for the turn, which crucially includes the Magic checks which you can use to replace nearly everything else. You need Politics at least Trained.
-   Statecraft: Primarily used to establish Diplomatic Relationships and to Request Foreign Aid. It’s important, but Request Foreign Aid isn’t essential beyond low levels, and you won’t need to Send Diplomatic Envoy often enough that you can’t handle it with Supernatural Solution. Trained should be plenty to get access to the Trained Activities.
-   Warfare: Primarily used to command armies, but can also be used to reduce Unrest. You should at least be Trained for when you need to go to war, but that likely won’t be for the first few Kingdom Levels. If someone declares war on your Village of a few hundred people, conventional warfare is not going to save you.

#### Stability

There is no specific way to receive a Circumstance Bonus to Stability-based checks. You’ll need to rely on other sources like Focused Attention.

##### Stability-based Skills

-   Agriculture: Used to establish farmlands and to harvest crops. Basically only exists for food. Once you have enough farms, this becomes completely useless, so absolutely don’t go past Trained.
-   Defense: Used to Fortify Hexes and to reduce Unrest. If you’re worried about war, Fortify Hex can be very important.
-   Engineering: Useful, but entirely replaceable with Magic thanks to the Practical Magic Kingdom Feat. If you dumped Culture for some reason, this is essential.
-   Wilderness: Almost identical to Exploration, but instead of letting you Hire Adventurers to play the game for you, it lets you generate food and reduce Unrest.

### Charter

Your Charter describes the general purpose of your new Kingdom. Mechanically, it’s Ability Boosts and Ability Flaws.

If you’re not sure what to pick, choose Open and put the boosts into Culture and Economy.

The rules for selecting a Charter are on page 12.

### Heartland

The primary function of your Heartland is to give you an Ability Boost when founding your kingdom. Your Heartland is determined by the hex in which you choose to place your original Capital, and it needs to be a hex that you have Reconnoitered (though not Cleared, for some reason).

When choosing your Heartland your starting Hex, note the Terrain Features rule on page 41. A Hex can contain only one Terrain Feature, such as a Settlement, so you can’t put your capital in a Hex with an existing Terrain Feature even though the Choose a Heartland text doesn’t say so.

The Favored Land benefit sucks. Ignore it. 2 Region Activities in a single hex per turn is sometimes useful, but the -2 penalty for doing so is absolute nonsense. Don’t bother.

The rules for selecting a Heartland are on page 13.

### Government

Your choice of Government is much like a Background: Ability Boosts, Skill Proficiencies, and a Kingdom Feat.

-   Despotism: If you plan to build around warfare, you want this or Feudalism. Despotism is more proactive, while Feudalism is more defensive. Despotism likes marching armies. Feudalism like walls and fortifications.
-   Feudalism: See Despotism.
-   Oligarchy: Great economically. Insider Trading gets you crucial extra RP, which helps you gain levels a little bit faster so that you can get your Kingdom up and running more quickly.
-   Republic: The feat is good, but not enough to carry the rest.
-   Thaumocracy The best Kingdom Feat (not just the best at level 1, but outright the best), the two most important Ability Scores, and good skills. This is, without question, the best choice.

### Leadership and Positions

Your kingdom has 8 leadership positions. They can be filled by players or by NPCs that the party has befriended, or covered by the Civil Service Kingdom Feat. Empty positions come with penalties, so you should avoid them at all costs.

Because this system punishes small parties, as a GM I recommend being very lax about letting NPCs fill Leadership Roles, otherwise the entire kingdom management system becomes incredibly punishing before players even learn how it works.

#### Invested Positions

You get 4 Invested Positions by default, and can change them each turn during the Upkeep phase. Certain events respond differently depending on which positions are invested, but there’s no way to go into those without spoilers.

Each position has an associated Ability Score, and an invested position provides a Status Bonus to checks with that Ability Score. The bonus starts from +1 and increases with Kingdom Level.

With no further information, your best bet is to get the Status Bonus for all 4 ability scores, then try to Invest as many positions as possible with NPCs.

### Ruin / Ruins

“Ruin” here refers to the degradation of your society, not to ruined structures that are probably full of monsters and treasure.

Certain actions and events will lead to acquiring Ruin. When an individual Ruin reaches its threshold, your kingdom suffers a permanent Ruin Penalty which applies to all checks made with the matching Ability Score. These penalties have no maximum, so letting Ruin spiral out of control can have devastating consequences.

Ruin is explained on pages 38 and 39 of the Kingmaker Player’s Guide.

See “Managing Ruin”, below, for more.

### Unrest

Unrest is the general measure of your populace being unhappy. War, failing certain checks, and other events can cause Unrest.

### Kingdom Checks

Your kingdom has a Control DC determined by your kingdom’s level. The DC increases with level, increasing by slightly more than 1 per level on average, similar to the standard DC progressions used throughout the PF2 rules. This means that the DC will grow faster than your proficiency, making skills less reliable unless you find bonuses elsewhere to keep pace. You’ll also need to avoid skills in which your kingdom isn’t proficient when the DC is too high to reasonably achieve.

See page 18 of the Kingmaker Player’s Guide for the Control DC table. It’s almost identical to the level-based DC table, but the DCs from levels 1 through 4 are 1 lower.

As with other checks in PF2, there are three types of bonuses/penalties, and the largest bonus and the largest penalty of each type apply to all checks. Bonuses of the same type don’t stack.

-   Circumstance: Usually from some temporary effect. You can get Circumstance bonuses from performing specific activities, and they’ll generally apply to one check, though some last for your turn or even multiple turns.
-   Item: Usually from buildings. You’ll need to expand your settlements to make space for additional buildings. Look for item bonuses to every skill in which your Kingdom is proficient. Item bonuses are capped by the size of the Settlement where your building is built, but you should only build Item Bonus buildings in your capital (see “Managing Settlements,” below), which is likely your largest Settlement. Unlike normal Item Bonuses, these item bonuses stack up to the Item Bonus Maximum determined by your Kingdom Size.
-   Status: Usually from Invested leadership roles. You get a minimum of 4 invested roles (more with certain NPCs), and there are 2 roles matched to each Ability Score, so you should _always_ have a Status Bonus to Kingdom Checks. The bonus starts at +1 and increases with kingdom level.

#### Negotiation DC

While the vast majority of checks are against your Kingdom’s Control DC, checks involving outside groups use that group’s Negotiation DC. These DCs are fixed, so checks involving those groups will get gradually easier as your Proficiency Bonus increases. As long as you’re at least Trained, you’ll eventually be able to establish Diplomatic Relationships and Trade Agreements.

See the sidebar on page 23 of the Kingmaker Player’s Guide.

### Fame or Infamy

Fame and Infamy are two sides of the same coin. They provide the same benefit (rerolling Kingdom Checks or suppressing anarchy/ruin), but can come from different sources. Keeping track of your Fame is crucial because Critical Failure on checks is frequently awful and costly.

You can have a maximum of 3 Fame/Infamy, and it sticks around between Kingdom Turns. Plan to end your turn with no more than 2 Fame/Infamy because you get 1 at the beginning of each Kingdom Turn. There’s little sense letting it go to waste unless you’re rolling extraordinarily well.

You can spend Fame/Infamy for two things:

-   Reroll a Kingdom Check. This is the primary use. It’s a Fortune effect, so you can’t combine this with Creative Solution or Supernatural Solution. Like other rerolls, you’re stuck with the second roll, which can be worse. Use responsibly.
-   Avoid Anarchy/Ruin: Like using Hero Points to stabilize your character, you can spend all of your kingdom’s Fame/Infamy to prevent anarchy or to prevent a ruin penalty from occurring. Check the specific rules text on page 42.

You can earn Fame/Infamy from 4 sources:

-   Critical Success on a Kingdom Check. Yes, every single time. This is very easy to forget.
-   Build a Famous/Infamous Structure. These structures have the Famous and/or Infamous tag in their description. Ex: Castle. Famous buildings are generally pro-social like Luxury Tavern, while Infamous buildings are generally anti-social like Illicit Market.
-   Create a Masterpiece. Once per Kingdom Turn. Decent if you’re good at Arts, but doing this once per turn isn’t good enough to justify heavily investing in a skill.
-   Noteworthy Acts. Entirely up to the GM.

Focused Attention is especially useful here. It’s one of very few things with a fixed DC, which means that Critical Successes become more likely as your skills improve. You can use Focused Attention both for the bonus to future checks and to farm Fame/Infamy.

The rules for Fame and Infamy are on page 42 of the Kingmaker Player’s Guide.

## Managing Hexes

### Preparing Hexes

See “Adventuring”, above. You cannot Reconnoiter Hexes as part of a Kingdom Turn, and Clear Hex is a wasteful risk when your party of adventurers is uniquely suited to clearing Hexes.

### Claiming Hexes

You need to Claim Hexes as quickly as possible and as often as possible. Weirdly, you’re very bad at when the game starts.

You can claim Hexes with 4 skills (one for each Ability Score), so you can’t accidentally build a Kingdom that’s functionally incapable of expansion. You can still be really bad at it if you don’t invest in one of these skills, but you won’t be completely dead in the water.

-   Exploration (Economy)
-   Intrigue (Loyalty)
-   Magic (Culture)
-   Wilderness (Stability)

### Pledge of Fealty

Pledge of Fealty (page 25)

### Roads

The Build Roads Activity lets you improve how quickly you can travel through a hex by one step. For example: Forests go from Difficult Terrain to Open Terrain. As your Kingdom expands, the ability to move quickly will become important.

## Managing Settlements

Your Kingdom will start with 1 Settlement, which is your original Capital. You might do just fine with only one Settlement. This section addresses both the founding and growth of new Settlements.

### Location, Location, Location

Your initial Capital’s location is a bit more complicated than placing future Settlements because it also determines your Kingdom’s Heartland, which determines its Ability Scores. Pick a hex that gets you the Heartland that you want and tries to follow the advice below.

Several factors can inform what makes a good location for a Settlement:

-   Accessibility: How easy is it for your party to reach the Settlement? One of the benefits of Settlements is that you can go there to trade and perform Downtime Activities. If you can’t reach the Settlement, its value to you is limited.
-   Farmland: Farms within the Influence of any of your Settlements reduce the Consumption or your entire Kingdom. This makes Hills and Plains surrounding your Settlements extremely valuable. A single Settlement in a good location with a big enough Influence radius may be able to feed your entire Kingdom.
-   Pre-Existing Structures and Ruins: Some Hexes will include pre-existing Structures. Building a Settlement in these Hexes allows you to incorporate those Structures for free, saving you the resource cost to build them.
-   Proximity to Other Settlements: Settlements will have a growing radius of Influence, and there’s no benefit to having overlapping Influence. Spreading Settlements can also mean that you can more easily reach a safe location while exploring the map.
-   Water: Water is absolutely crucial. You can only build Lumberyards and Piers on water borders, and they’re both fantastic. Having a water border also allows you to use Boating for the Establish Trade Relations task.

### Influence Radius

Influence provides two functions:

-   Farms must be within the Influence of a Settlement
-   Item Bonuses from Structures usually only apply to Kingdom Checks with the Influence of the Settlement which provides them. However, your Capital’s structures provide Item Bonuses in your entire Kingdom, so there’s little reason to care about this benefit.

So it’s really just farms.

Influence is detailed on page 47 of the Kingmaker Player’s Guide.

### Your Capital

Build a Town Hall. That should be your first priority after building your first Tenements in your capital. Getting 3 Leadership Activities per players is a massive advantage.

Your capital has a unique and essential benefit: any Item Bonuses provided by buildings in your capital apply in all of your settlements regardless of Influence. This makes space in your capital exceptionally powerful and valuable.

Identify buildings that will provide Item Bonuses to skills which your kingdom cares about. Plan to build those buildings as soon as possible.

### Structures

Your Settlement begins as a Village with one 4-lot block. To advance to a Town, you need to fill that block’s 4 lots. You need at least one housing unit to avoid being Overcrowded, so start by building a Tenement or Houses, and plan to put things in that first block which will never need more than 1 lot if you upgrade them later.

Remember that you can go straight to advanced versions of structures rather than upgrading lower-level ones. Once your Kingdom Level improves, this makes it easier to build high-level buildings. High-level buildings might also require more lots than their low-level versions, such as going from a Town Hall to a Castle, which makes upgrading impossible unless you left space for it.

### Housing

As your settlement expands, you’ll get additional blocks. You need one lot of housing for each occupied block, or your Settlement becomes Overcrowded, and you start generating Unrest. 

Plan to build a Tenement before you put anything into a new block.

Housing does not need to be in every block, you just need as much housing as you have occupied blocks. Some buildings also can’t be in the same block as housing, such as a Tannery. The most efficient and least annoying way to handle housing is to dedicate one or more blocks to housing. Fill those blocks with Tenements like a magical slumlord or build Houses if you have ample Lumber and don’t want the Ruin from building Tenements.

### Growth

Upgrading a Village to a Town requires you to fill all 4 lots in your Settlement’s singular Block. Upgrading a Settlement from Town to any higher tier requires you to be the minimum Kingdom Level, and then to use 2 of the lots on every block in your Settlement. The Settlement fully upgrades when you Build a Structure and place it in a new block for the next tier of Settlement.

If you found a new Settlement, it will take a minimum of 5 Kingdom Turns to turn it into a Town, 6 more Kingdom Turns to it into a City, then 10 more turns to turn it into a Metropolis. In a little less than 2 years, your Settlement can go from nonexistent to a Metropolis.

## Managing Commodities

Commodities have two functions: you can trade them, and you can use them to build buildings in your Settlements and to pay for Consumption if you don’t have enough farm hexes.

Commodities are available from several sources, including Work Sites and several Leadership Activities.

### Capacity

By default you can store 4 of each type of commodity, but that capacity increases as your Kingdom Size increases. 

-   Foundry: +1 Ore Capacity and a very nice VTT
-   Granary: +1 Food Capacity
-   Lumberyard: +1 Lumber Capacity
-   Secure Warehouse: +1 Luxury Capacity
-   Stonemason: +1 Stone Capacity

You need enough capacity to store enough commodities to build every structure you want in each of your Settlements. The most expensive structures require up to 20 of one commodity, except for the Amiri-exclusive structure which takes 30 Stone. If you can store 40 of each type of commodity, you should be fine unless you have numerous Settlements.

### Work Sites

Work Sites automatically generate Commodities every turn during the Upkeep phase, so you’ll want Work Sites that generate each type of Commodity, but not so many that you’ll overflow your capacity.

It’s also important to get an Item Bonus to Establish Work Site checks. You get these bonuses from the same buildings that increase your Commodity Capacities. Each building grants +1, but remember that in the Kingdom Rules you can stack Item Bonuses up to your Kingdom’s Item Bonus Maximum, which is determined by your Kingdom Size.

#### Resource Hexes

If you establish a Work Site on a Resource Hex, the Work Site generates 2 commodities of its type instead of just 1. You’ll need to explore the map to find Resource Hexes, then expand toward them.

### Purchase Commodities

Beyond Work Sites, Purchase Commodities is the primary option for acquiring commodities. However, it costs you RP to do so. It’s in the name. Success gets you 2 Commodities for 8 RP for Luxuries or 4 RP for anything else. If you take those 2 Commodities, then use them for Trade Commodities on your next turn, a Success will get you 2 Resource Dice on the turn after that. Even when your kingdom is tiny, 2d4 RP (average 5) is a good trade for 4 RP.

If you critically succeed on Purchase Commodities, you get a total of 6 commodities: 4 of the type you wanted, and 2 of any other type except Luxuries. If you want Luxuries, you’ll need to pay extra or make them yourself.

### Food

Gather Livestock, Go Fishing, and Harvest Crops all generate Food Commodities. They all use the exact same rules, but a different skill. They’re also Region Activities, which is frustrating because you only get 3 of those per turn, and they’re for crucial actions like Claim Hex that you need for your kingdom to grow long term.

Of course, until you hit level 3 you can’t establish farms, so you’ll need to spend Food Commodities or RP, and RP turns into experience, so you want to minimize RP costs as much as possible. You will need to build farms to mitigate this cost. But, for reasons I can’t fathom, farms don’t generate Food Commodities, so building extra farms doesn’t generate a surplus that you can trade.

The only uses for Food Commodities are to pay for Consumption or for use with Trade Commodities. You can trade other commodities which are much easier to generate, so I recommend reserving Food solely to pay for Consumption when you’re building or upgrading Settlements and need a few turns to build new farms.

Sources of Food Commodities:

-   Gather Livestock
-   Go Fishing
-   Harvest Crops
-   Purchase Commodities (4 RP)

### Luxuries

User for building specialized structures.

Sources of Lumber Commodities:

-   Clandestine Business
-   Craft Luxuries
-   Purchase Commodities (8 RP)

### Lumber, Ore, and Stone

Used for building structures.

Sources of Lumber Commodities:

-   Work Sites
-   Purchase Commodities (4 RP)

## Managing Resource Points (RP)

### Why Do You Need RP?

RP is used for building structures and for performing certain Leadership Actions, then any left over at the end your turn turns into Kingdom XP (up to a maximum of 120).

### Resource Point (RP) Sources

Remember that each PC Leader can only select the same Leadership Activity once per turn, so the spammable actions should be performed once by each party member.

In no particular order:

-   Upkeep Phase: You get 4 + Kingdom Level Resource Dice automatically. The dice get bigger as your Kingdom Size increases, so start claiming hexes.
-   Trade Commodities: You can get up to 8 additional Resource Dice, provided that you have Commodities to trade. Make sure that you always have 4 of one type of Commodity ready to be traded.
-   Manage Trade Agreements: It pays to have friends. It costs 2 RP per agreement that you want to manage, but even if you have d4 Resource Dice you’re getting an average of 2.5 back on a Success. You don’t get the dice until your next turn, but get accustomed to waiting for extra Resource Dice every other turn. Increasing the DC by 5 if you do this on back-to-back turns is punishing, so don’t do that unless you’re unreasonably confident that you’ll still succeed. Also, collect trade agreements like you’ll die if you don’t.
-   Clandestine Business: You can only realistically use this once every 3 turns, but it can generate RP and/or Luxuries.
-   Request Foreign Aid: Surprisingly abusable. If you have a Diplomatic Relationship with a group that has a low Negotiation DC, each PC Leader can use this once per turn to farm RP. You’ll either get immediate Resource Dice or 1d4 RP on your next turn.
-   Capital Investment: Convert a stupidly large amount of GP into a pitifully small amount of RP. Never do this.
-   Jublost’s [Process Hidden Fees](https://2e.aonprd.com/Actions.aspx?ID=1497): +1 or +2 dice per player that performs the Activity, but might only be able to use it every other turn.
-   Fame and Fortune Kingdom Feat: Roll 1 die every time you roll a Critical Success on a Kingdom Check. Unfortunately, it’s a level 11 feat, so you won’t get it until late game.
-   Insider Trading Kingdom Feat: +1 die every turn.

## Managing Ruin

Over time you’ll generate some Ruin. While it’s not immediately a problem, it will eventually become one. Where Unrest imposes an immediate penalty that can be quickly repaired, Ruin will build until eventually it overflows and becomes a semi-permanent penalty which can stack without a maximum.

By default, your Ruin Threshold for each Ruin is 10. When you reach that Threshold, you reduce that Ruin by your Threshold (you don’t just reset it to 0), and increase the Ruin Penalty by 1. For example: You have 9 Crime and a Crime Threshold of 10. You gain 3 Crime. You then subtract your Ruin Threshold of 10, reducing Crime from 12 to 2, then increase your Crime Penalty by 1.

Ruin Resistance is a recurring benefit. At Kingdom Level 5 and every 3 levels thereafter, you receive Ruin Resistance, which repeats the same benefits each time: clear on Ruin, and increase that Ruin’s Threshold by 2.

### Increasing Ruin Thresholds

If you’re struggling with Ruin, it may be helpful to increase your Ruin Thresholds. This is an absolutely disaster scenario, but sometimes things go wrong and you need to survive anyway.

-   Muddle Through: Increases 3 of your Ruin Thresholds. Requires your Kingdom to be trained in Wilderness for some reason.
-   Ruin Resistance: +2 to one Threshold each time you gain the feature.

### Sources of Ruin

-   Build Structure: Certain structures, such as the Illicit Market, will give you Ruin when they’re built. If you’re going to build a market for criminals, you’re going to get Crime.
    -   Illicit Market: +1 Crime
    -   Tenement: Dirt cheap housing, but it also imposes a Ruin.
    -   Thieves’ Guild: +1 Crime
-   Leadership Activities: Certain activities can increase Ruin.
    -   Clandestine Business: Critical Failure increases Corruption by 2, and another Ruin of your choice by 1.
    -   [Collect Taxes](https://2e.aonprd.com/Actions.aspx?ID=1410): Critical Failure increases a Ruin of your choice by 1.
    -   Craft Luxuries: Critical Failure increases a Ruin of your choice by 1.
    -   Improve Lifestyle: Critical Failure increases a Ruin of your choice by 1.
    -   Pledge of Fealty: Critical failure increases a Ruin of your choice by 1.
    -   Provide Care:  Critical failure increases a Ruin of your choice by 1.
    -   Quell Unrest: Critical failure can increase 2 Ruins of your choice by 1.
    -   Relocate Capital: Failure increases 2 Ruins of your choice by 1. Critical failure increases 3 Ruins by 1 and the remaining Ruin by 3. Avoid this at all costs.
    -   Send Diplomatic Envoy: Critical Failure increases a Ruin of your choice by 1.
    -   Tap Treasury: Critical Failure increases a Ruin of your choice by 1.
-   Overspend RP: “Whenever the kingdom is forced to spend RP that would drop it below 0, spend all the RP the kingdom has and then increase a Ruin of the PCs’ choice by 1.”
-   Unrest: During your Kingdom Turn’s Upkeep Phase, you’ll perform the Adjust Unrest step. If your Unrest is 10 or higher, you roll 1d10 and distribute that many points to Ruins of your choice. This is a disaster scenario where your Kingdom is rushing toward anarchy and ruin.

### Preventing Ruin

-   Spend all of your Fame/Infamy: “if an increase to a Ruin would increase the ruin penalty (in which case the Ruin is instead set at one point below the value at which a ruin penalty would accrue).”

### Reducing Ruin

-   Claim a Refuge hex
-   Leadership Activities:
    -   Provide Care: Critical success reduces a Ruin of your choice by 1.
    -   Infiltration: Critical Success reduces a Ruin of your choice by 1.
    -   Repair Reputation is the primary means for reducing Ruin. A Success reduces one Ruin by 1, while a Critical Success reduces it by 2 _and_ reduces the Ruin Penalty by 1. However, remember that the DC for Repair Reputation is your Control DC +2, so it’s unusually difficult.
-   Ruin Resistance lets you reduce a Ruin to 0 each time that you get the feature. If you’ve been accumulating a bunch of one type of Ruin, this is a great way to clear it. However, it’s difficult to control the timing of gaining a Kingdom Level, so you can’t rely on this to solve the problem on its own.
-   Structures:
    -   Menagerie: You can reduce 1 Ruin of your choice by 1 when you add a creature.
    -   Monument: Once per turn, build a Monument to reduce 1 Ruin of your choice by 1.

### Removing Ruin Penalties

-   Repair Reputation can reduce one Ruin penalty by 1 on a Critical Success. This feels absurd because reducing Ruin is usually done 1 at a time, but a single well-optimized Kingdom Check could easily repair 10 or more Ruin accumulated across several Kingdom Turns. However, remember that the DC for Repair Reputation is your Control DC +2, so it’s unusually difficult.
-   “if circumstances ever allow for a Ruin’s points to be reduced and that particular Ruin is already at 0 points, instead of reducing Ruin to a negative value you can instead attempt a DC 16 flat check; on a success, reduce that Ruin’s penalty by 1 to a minimum of 0.”

### Which Ruin Should I Increase?

Most sources of Ruin allow you to choose which Ruin you increase. Clandestine Business can increase Corruption, some Structures can increase Crime, but every other source (barring things which might be spoilers which I don’t know about) allows you to pick. If you’re worried about Corruption and Crime, you can simply avoid using Clandestine Business and building Crime-related structures.

You can distribute Ruin between types to prevent one from getting out of hand, or you can pile it all into one type so that you only need to worry about managing one variety of Ruin. If you choose to pile all of your Ruin into a single type, Ruin Resistance becomes especially useful. You’ll be able to periodically reset to 0, and the growing Ruin Threshold will make it safer to continue piling Ruin into a single Threshold.

But which Ruin should become the dumping ground for whatever Ruin you might generate? I see two ways to pick.

First, you can pick a dump stat. Of the four Ability Scores, choose the one which your Kingdom cares about the least. Write off that Ability Score and any related skills, and you can happily accumulate Ruin Penalties with minimal consequences.

Alternatively, you can pick the ruin which is easiest for you to reduce with Repair Reputation. Each Ruin is targeted by a different skill, so you could pick the one where your skill is the strongest. For example: Trade (Economy) can be used to reduce Corruption, so a Kingdom focused on Economy might pick Corruption because they’ll be able to reduce Corruption reliably.

## Managing Unrest

Unrest is awful. Even 1 point imposes a penalty.

The Crush Dissent feat can prevent Unrest once per turn with a successful Warfare check, but you need to invest heavily in Warfare to avoid Critical Failure.

Unrest

Penalty to All Kingdom Check

\>1

\-1

\>5

\-2

\>10

\-3

\>15

\-4

### Leadership Actions

Leadership Actions are the most accessible way to reduce Unrest. Remember that a single PC Leader can typically only use the same Leadership Action once per Kingdom Turn.

Rest and Relax can reduce Unrest, though only by 1. Even so, it’s less complicated than Quell Unrest, and has a helpful Critical Success effect. Your party can also use it multiple times on the same turn, though using it on back-to-back turns imposes a +4 DC increase.

Quell Unrest is the default way to reduce Unrest. However, your kingdom can only Quell Unrest once per Kingdom Turn, and you can’t use the same skill to do so on back-to-back turns. This means that you’ll need to either need to have two skills that are good enough to support Quell Unrest or you’ll need to resort to Rest and Relax.

Provide Care can also be used to Reduce Unrest. It’s very straightforward, but it also only allows one skill.

Both Rest and Relax and Quell Unrest are “general actions”, meaning that they can work with multiple skills. Rest and Relax works with Arts, Boating, Scholarship, and Trade. Quell Unrest works with Arts, Folklore, Intrigue, Magic, Politics, and Warfare. Provide Care uses Defense. That’s a total of 10 skills that can be used for reducing Unrest, and Arts can be used for two of the Activities.

### Region Activities

Fortify Hex reduces Unrest by 1 if you’re successful.

### Civic Activities

Many buildings can reduce Unrest when they’re constructed, but housing and walls are especially effective for their cost.

Building a Tenement costs 1 lumber, reduces Unrest by 1, and adds housing capacity to prevent becoming Overcrowded. If you don’t need more housing, upgrade a Tenement to Houses to reduce Unrest by 1.

Wooden Walls are inexpensive, don’t occupy a square of your settlement’s limited space for buildings, and reduce Unrest by 1 when built. Upgrade to Stone Walls later to reduce Unrest by 1 again.

Unfortunately, Civic Activities are one of the last things you do on a turn. They’ll hopefully get you to 0 Unrest before your next turn, but you may have spent your entire turn suffering a penalty from Unrest.

## Managing Events

Get yourself 3 Watchtowers in every Settlement. A consistent Item Bonus of +1 to +3 (1 per tower) to resolve events will be consistently useful.

Otherwise, I can’t offer any advice without spoilers.

## Kingdom Advancement

### Kingdom Level and XP

Your kingdom gains a level every 1,000xp, and can be no higher level than your average party level.

You can gain Kingdom XP from many sources:

-   If you succeed on Creative Solution or Supernatural Solution, but don’t use the effect, you get 10 XP at the end of your turn. Even on a regular Success, that converts 1d4 RP into 10 XP, which is more efficient than converting the RP directly.
-   Leftover RP at the end of your Kingdom Turn converts to the same amount of XP, so generating a huge amount of RP is the most consistent way to gain kingdom levels. Frustratingly, you need to gain a few levels to ramp up your RP production. See “Managing Resource Points (RP)”, above.
-   Claiming hexes grants you 10 XP each time you claim a hex.
-   Milestones are rare, and can provide a total of 960 XP over the entirety of the game. Not even enough for a single level. The table is on page 44.
-   Events grant you 30 XP each time an event occurs, and might award more as a reward for resolving the event.
-   Story rewards as part of the campaign.

### Kingdom Features

1.  Kingdom Feats: You get one for free at level 1, then at every even-numbered level for a total of 11. There are only 17 options, and one is Skill Training, so you can get most of them. Of those 17, just 8 are rated green or blue, so you’ll have room to take Skill Training multiple times, though perhaps not at low levels.
2.  Skill Increases: You get one at level 3, then at every odd-numbered level. Like a character, you will be able to maximize 2 to 3 skills unless you spend Kingdom Feats on Skill Training. Unlike a character, you don’t have a party of 4 to cover your gaps. It may be more effective to have 1 or 2 maximize skills and numerous Trained skills to cover things you only need sometimes. Or you can just use Supernatural Solution for everything.
3.  Settlement Construction (Town): Upgrading your Village to a Town means that you can finally make your Village self-sustaining. This is where the Kingdom Rules really start to work as intended after the possible multi-year period of suffering at levels 1 and 2. Towns get 4 blocks for a total of 16 lots.
4.  Expansion Expert (2 Hexes): The permanent +2 Circumstance bonus will be consistently useful. You no longer need to devote a Leadership Action to Focused Attention to hunt for the Circumstance Bonus to guarantee that you’ll get a Hex.  
    The ability to claim 2 Hexes per turn also means that your Kingdom can grow twice as quickly. Keep an eye on the DC increase imposed by higher Kingdom Sizes. If you grow too quickly and can’t stack bonuses enough to offset the DC change, you may find that your Kingdom is unmanageable.
5.  Fine Living: Free lifestyle and 1 permanent +1 Circumstance Bonus to Craft and Earn Income. If you’re not using the Downtime mechanics at all, there’s no benefit here. Of course, that would be a weird choice in Kingmaker.
6.  Ability Boosts: You only get to boost 2 Ability Scores every 5 levels. Like the rules for Player Characters, going above 18 (+4) requires 2 boosts to get to the next modifier. This could make it more appealing to improve your lower Ability Scores, but as always Pathfinder rewards specialization over diversification.
7.  5 Ruin Resistance: See Managing Ruin
8.  Experienced Leadership: An automatic increase to the Status Bonuses to Kingdom Checks. By now you’ve gotten very good at using Invested Leadership Roles to keep the Status Bonus to every check.
9.  Expansion Expert: 3 Hexes per turn. Keep in mind that this will be all of your Region Activities for the turn, which means that you can’t Build Roads or Fortify Hex if you’re rushing to grab every Hex you can reach.
10.  Settlement Construction (City): Cities can expand to all 9 blocks for a total of 36 lots.
11.  10 Life of Luxury: An upgrade from Fine Living. The bonus is now +2.
12.  Civic Planning: One extra floating Civic Activity is very powerful. This can either help small Settlements catch up to larger ones, or you can keep putting it into your Capital to ensure that you’re stacking Item Bonuses to benefit your entire Kingdom.
13.  Settlement Construction (Metropolis): A Metropolis a full second Urban Grid of 9 blocks, fully doubling the size of a City.
14.  16 Experienced Leadership: Status Bonuses are now +3.
15.  Envy of the World: Several excellent benefits. If you’re good at farming Fame/Infamy (which you can likely guarantee by using Focused Attention), you can routinely prevent Unrest and Ruin.

### Kingdom Feats

Ignore the Status Bonuses from feats. You should be getting a Status Bonus from Invested Leadership Positions, and the two don’t stack.

#### Level 1 Kingdom Feats

-   Civil Service: Functionally useless. You can fill vacant roles with NPCs. The +2 Circumstance Bonus to New Leadership will not matter often enough to justify.
-   Cooperative Leadership: The DC of 20 for Focused Attention is static, so it becomes easier as you gain levels. You should absolutely take this at some point, but not at low levels when you can’t reliably beat DC 20.
-   Crush Dissent: If you’re going to invest heavily in Warfare, this is great. Otherwise, skip it and see Managing Unrest, above.
-   Fortified Fiefs: Useful once war becomes an issue, but largely pointless before then.
-   Insider Trading: The easiest, most reliable increase to RP in the game.
-   Kingdom Assurance: The progression of your Proficiency Bonus compared to the Control DC means that you will be guaranteed to fail checks at 16 of the 20 levels even if you maximized the chosen skill at every opportunity. If you are simply Trained, you always fail, but never criticall fail. Therefore: This is good if you are happy with the Failure result for the chosen skill. See “Kingdom Assurance Math”, below.
    -   Kingdom Assurance (Industry) means that you can always use Trade Commodities to trade 1 to 4 commodities for 1 Resource Die on your next turn. Kingdom Assurance (Trade) used with Manage Trade Agreements guarantees 1 RP per Trade Agreement, though you may struggle to establish those without investing in Trade.
    -   Kingdom Assurance (Intrigue) means that you can always use Clandestine Business to get 1 Resource Die at the cost of 1 Unrest and 1 Corruption.
    -   Kingdom Assurance (Intrigue) means that you can always use Request Foreign Aid to get consistent results. The DC for Request Foreign Aid will vary depending on who you’re calling upon, but you get RP for Failure or anything better.  
-   Muddle Through: You can manage Ruin with Repair Reputation. You should be reducing your Ruin rather than very slightly increasing your capacity for it. See Managing Ruin, above.
-   Practical Magic: Impossibly good. Magic is the best skill in the game due to this feat, and it’s so impactful that this single feat sets the meta for the entire ruleset.
-   Pull Together: Nice insurance against inevitable disaster. The tracking is a pain, but it’s still really good. Of course, you also have Fame/Infamy for rerolls, and generating more Fame/Infamy from Critical Successes may be enough that you never need Pull Together.
-   Skill Training: The default if you don’t know what else to take. You’ll never get enough Skill Increases to cover everything you want, so expect to take this several times.

#### Level 3 Kingdom Feats

-   Endure Anarchy: Reducing Unrest by an additional 1 can make a big difference. If you’re routinely doing things that trigger Unrest like Collect Taxes or leaving your Settlements Overcrowded, or if you’re at war often, this may be consistently useful. If you’re better about managing Unrest and rarely go above 6, don’t bother.
-   Inspiring Entertainment: Only worthwhile if your Culture is significantly better than your Loyalty. The Status Bonus will become obsolete at level 8, and even from levels 3 through 7 it’s not worth being +1 better than what you get from Invested Leadership Roles.
-   Liquidate Resources: Tempting at low levels when RP is scarce, but you really need to get good at generating RP if you want your kingdom to succeed.
-   Quick Recovery: Without getting into spoilers, it’s difficult to say how important this will be, but +4 is a massive bonus in PF2. You will get a Status Bonus from your Invested Leadership Roles, but it nevers gets higher than +3. Of course, that means that this feat’s benefits diminish as you gain levels, which doesn’t feel great.

#### Level 7 Kingdom Feats

-   Free and Fair: New Leadership should be an exceptional rarity, so you’re doing this for Pledge of Fealty. Pledge of Fealty is really good, and a +2 Circumstance Bonus is nice, but by this level you should be able to comfortably get a Circumstance Bonus from another source. Focused Attention can get you +3 at the cost of a Leadership Action, and you get considerably more Leadership Actions than Kingdom Feats.
-   Quality of Life: One extra Luxury Commodity once per turn, which feels very small, but in a game where you might take hundreds of Kingdom Turns, it will add up over time unless you already have an easy way to generate Luxuries.
    
    The second half of the feat offers access to higher-level magic items in your Settlements. You can start building Magic Shops at your next Kingdom level, and you can stack that benefit up to 3 times. The befits provided by Structures appear to stack with this, so it may be worthwhile if your Settlements are falling behind your party’s level. But be careful about putting too many resources into raising that item level or you may find that your Settlements sell items that you can’t afford.
    

#### Level 11 Kingdom Feats

-   Fame and Fortune: A fantastic way to passively generate RP. It gets more useful as your party gets larger because you’re making more skill checks and therefore have more opportunities to roll a Critical Success.

## Kingdom Turns

### How Often Do These Happen?

Once a Month.

### How Do I Make Kingdom Turns Faster?

1.  Plan ahead. Write down anything that you plan. You don’t need to adhere to that plan, but if you take the time to make a decision, writing down the decision preserves the value of that time. You might plan a city’s layout for the next ten turns, then write that decision down, and remove the need to shop for new buildings every Kingdom Turn.
2.  Use the turn tracker below. Having the steps written out with quick reference links and tips will help you to quickly mak
3.  Work offline. You can do big parts of kingdom turns outside of the game session. A text medium like Discord works very well for this. The only parts that require direct, engaged discussion are the Leadership Activities and possibly Events. You can handle the Upkeep Phase and the Commerce Phase offline.

### Kingdom Turn Tracker

For your convenience, this section is formatted so that you can copy and paste it into a document, then fill in the sections as you progress. This will help remind you of important steps, where to find rules text, and includes some helpful tips.  

Note your kingdom’s stats at the start of your turn, and update the third table as your bonuses and penalties change throughout the turn so that you don’t lose track of long-running bonuses, such as the Circumstance bonus to Economy-based checks from [Collect Taxes](https://2e.aonprd.com/Actions.aspx?ID=1410).

Level

Charter

Heartland

Government Type

Size (p 38)

Control DC (p 16)

Fame

/ 3

Commodities

Ruin

At Start

At End

At Start

At End

Food

/ 4

/ 4

Corruption

/ 10

/ 10

Lumber

/ 4

/ 4

Crime

/ 10

/ 10

Luxuries

/ 4

/ 4

Decay

/ 10

/ 10

Ore

/ 4

/ 4

Strife

/ 10

/ 10

Stone

/ 4

/ 4

Unrest

Ability Scores / Attributes

Circumstance

Item

Status

Bonus

Penalty

Bonus

Penalty

Bonus

Penalty

Culture

Economy

Loyalty

Stability

-   Upkeep phase
    -   Gain 1 [Fame](https://2e.aonprd.com/Rules.aspx?ID=1792)
    -   1: Leadership
        -   Changes to Leadership?
            -   RPGBOT’s Tip: Check if Companions would be well suited to any Leadership roles
            -   \[Note any changes or “none”\]
        -   Invested [Leadership Roles](https://2e.aonprd.com/Rules.aspx?ID=1774) _(4 roles by PCs, possibly more for some NPCs, p 18):_

1.  \[Role\]: +1 Culture
2.  \[Role\]: +1 Economy
3.  \[Role\]: +1 Loyalty
4.  \[Role\]: +1 Stability
5.  \[Note any others\]

-   Absence Penalties
    -   \[note any penalties\]

-   2: [Unrest](https://2e.aonprd.com/Rules.aspx?ID=1785)_(p39 and p 43; +1 per overcrowded settlement, +1 if at war; Unrest > 10, add ruins and possibly lose a hex; Unrest > 20, kingdom falls into anarchy)_
    -   \[note amount\]
-   3: Resource Collection (Kingdom Level + 4 + bonus dice – penalty dice; die size increases with [kingdom size](https://2e.aonprd.com/Rules.aspx?ID=1781\))
    -   Resource Dice: \[#\]d\[#\] -> \[note result\]
    -   Commodities:
        -   Food: \[note amount\]
        -   Lumber: \[note amount\]
        -   Luxuries: \[note amount\]
        -   Ore: \[note amount\]
        -   Stone: \[note amount\]
-   4: Pay Consumption (p. 43-44; Farms reduce total Consumption by 1 each, Mills and Stockyards can reduce Consumption for their Settlement by 1 each)
    -   City Consumption:
        -   \[Settlement\]: \[note amount from page 54\] – \[mills+stockyards in this settlement\] = \[total\]
    -   Army Consumption:
        -   \[Army\]: \[note amount from stat blocks on page 66\]
    -   Farms: \[note amount\]
    -   \[note total amount spent\] food (1 food commodity per point of Consumption)
    -   \[note amount spent\] RP (5 RP per point of Consumption)

-   Commerce Phase
    -   1: [Collect Taxes](https://2e.aonprd.com/Actions.aspx?ID=1410) _(page 35; Trade (Economy) vs. Control DC)_
        -   RPGBOT’s Tip: Always consider doing this, then spend a Leadership Action to [Quell Unrest](https://2e.aonprd.com/Skills.aspx?ID=17&General=true), [Provide Care](https://2e.aonprd.com/Actions.aspx?ID=1389), or [Rest and Relax](https://2e.aonprd.com/Skills.aspx?ID=19&General=true). However, if you depend heavily on 3 three other Activities during the Commerce Phase, consider if the Unrest penalty will offset a likely +1 bonus.
        -   \[note the decision and outcome\]
    -   2: Approve Expenses (p 33; [Improve Lifestyle](https://2e.aonprd.com/Actions.aspx?ID=1402) Politics (Loyalty) vs. Control DC; Improve Lifestyle or Tap Treasury)
        -   \[note the decision and outcome\]
    -   3: Tap Commodities _(_[_Trade Commodities_](https://2e.aonprd.com/Actions.aspx?ID=1396)_, p 30; Industry (Economy) vs. Control DC)_
        -   RPGBOT’s Tips:
            -   Always try to trade 1 because a Failure still gets you 1 extra resource die
            -   If you trade with a group that you’ve established diplomatic relations with, you gain a +1 circumstance bonus to the check. This does not stack with the bonus from Collect Taxes.
        -   \[note the decision and outcome\]
    -   4: [Manage Trade Agreements](https://2e.aonprd.com/Actions.aspx?ID=1408) _(page 34; Trade (Economy) vs. Control DC)_
        -   RPGBOT’s Tip: Attempt every turn despite the +5 DC increase. You still get bonus RP on failure, and cost for Crit Failure is just not trading for 1 turn. If you’re bad at Trade, use Kingdom Assurance to guarantee a Failure so that you always get 1 extra RP die.
        -   \[note the decision and outcome\]
-   Activity Phase
    -   1: [Leadership Activities](https://2e.aonprd.com/Rules.aspx?ID=1806) _(2 per player, one player at a time in any order;_ [_Town Hall_](https://2e.aonprd.com/KMStructures.aspx?ID=68) _in your capital upgrades to 3 activities per player; page 42)_
        -   Rules Reminders:
            -   “Unless an activity states otherwise, a leader cannot attempt the same Leadership activity more than once per Kingdom turn.”
            -   Players must complete ALL of their Leadership Activities before the next player acts
            -   NPC Leaders don’t get to take Leadership Actions
        -   RPGBOT’s Tips:
            -   Build a [Town Hall](https://2e.aonprd.com/KMStructures.aspx?ID=68) so that you get 50% more actions
            -   If you want to [Celebrate Holiday](https://2e.aonprd.com/Actions.aspx?ID=1395), do it FIRST for the bonuses
            -   If you expect a kingdom event, use [Prognostication](https://2e.aonprd.com/Actions.aspx?ID=1401)
            -   Acquire commodities for any buildings you plan to build EARLY in case a check is failed and someone else needs to try
            -   If you don’t know what to do with your actions, [Focused Attention](https://2e.aonprd.com/Skills.aspx?ID=14&General=true) is an easy choice. [Creative Solution](https://2e.aonprd.com/Actions.aspx?ID=1403) and [Supernatural Solution](https://2e.aonprd.com/Actions.aspx?ID=1400) are also good, but have a RP cost.
        -   \[Player name\]: \[Note activities and outcomes\]
    -   2: [Region Activities](https://2e.aonprd.com/Rules.aspx?ID=1807) _(page 42; 3 total, but only 1 per hex unless_ [_Favored Land_](https://2e.aonprd.com/Rules.aspx?ID=1762)_)_
        -   \[note the decision and outcome\]
        -   \[note the decision and outcome\]
        -   \[note the decision and outcome\]
    -   3: [Civic Activities](https://2e.aonprd.com/Rules.aspx?ID=1808) _(1/settlement; page 42;_ [_Build_](https://2e.aonprd.com/Actions.aspx?ID=1372) _(p 22) or_ [_Demolish_](https://2e.aonprd.com/Actions.aspx?ID=1391) _(p 28))_
        -   RPGBOT’s Tip: You need 1 residential lot per occupied block, but you can put them wherever. Build [tenements](https://2e.aonprd.com/KMStructures.aspx?ID=65) or [houses](https://2e.aonprd.com/KMStructures.aspx?ID=23), then wait to upgrade them when you need to remove Unrest.
        -   \[Settlement\]: \[note the decision and outcome\]
-   Event Phase
    -   1: Check for [Kingdom Event](https://2e.aonprd.com/Rules.aspx?ID=1839) _(DC 16 flat check, -5 for each turn with no event)_
        -   \[note the event and results\]
    -   2: Resolve Event _(Events listed on page 59)_
    -   3: Apply Kingdom XP (Page 45)
        -   RP to XP: \[note amount of XP\]
        -   Check for milestones: \[note milestone names\]
        -   +30 if an event occurred:
            -   \[note either +30 or +0\]
            -   \[note reward if event provided an additional xp reward\]
        -   \[note other sources of Kingdom XP\]
    -   3: Increase level if above 1,000 xp
    -   4: Final XP: \[note XP total\]
-   Cleanup _(list anything which affects your next turn, such as RP, commodities, bonuses/penalties, and if you’ve taken actions like Collect Taxes, Celebrate a Holiday, or Manage Trade Relationships)_
    -   \[note any lingering stuff: ongoing events, RP or Resource Dice for next turn, lingering modifiers such as from Celebrate Holiday\]

## Other Stuff

### Getting to Level 2, Then to Level 3

**NOTE:** When I wrote this bit I forgot that Creative Solution and Supernatural Solution both grant 10 XP if you don’t use their success effects. The math is a bit complicated, but it could significantly boost how quickly you progress.

It takes 1,000xp to gain a Kingdom Level. The most reliable source of XP is RP. You will get 5d4 RP by default at level 1, averaging to 12.5. With one Kingdom Turn per month, you should reach level 2 in a little less than 7 years (80 turns over 80 months) of in-game time, assuming that you never spend RP.

Obviously that’s insane, so you’ll want to speed that up however possible. If nothing else, you need to rush to level 3 so that your capital can grow from a Village to a Town in order to open up more blocks for buildings and to get an Influence radius so that you can benefit from farms.

Claiming hexes will get you 10 XP per hex, so prioritize that as much as possible. Use Focused Attention to get a Circumstance bonus on the check to Claim Hex, then either use Creative Solution, Supernatural Solution, or a Fame point so that you can reroll in the event of a failure.

That gets us to 22.5 XP per turn, so we’re down to 44.44 turns to hit level 2, which is just under 4 years. A big improvement, but still insanely long.

Look for ways to get bonus RP and Resource Dice. See Managing RP, above. If you can generate 4 of the same commodity (save Food to pay for Consumption costs) and then successfully Trade Commodities, that will generate 4 Resource Dice on the following turn. Clandestine Business can get you 2 dice immediately on a Success. The Insider Trading feat gets you 1 Resource Die per turn, but you may not have that feat.

Kingdom Events also get you 30 XP per event, and you can expect those roughly every third turn.

If we assume +6 Resource Dice from trade and Clandestine Business, 11 dice now get us an average of 27.5 RP. Add the 10 for a hex and an average of 10 XP per turn from events for a total of 47.5. That’s 21 turns, which is just under 2 years. We need more, and all that’s left is Milestones.

Page 44 has a page of Milestones. Several of these will take a massively long time to reach, but there are a few easy ones that you could hit within a few Kingdom Turns.

-   Claim your first Landmark (+40): You’ll see some landmarks during play. You should be able to identify them by Reconnoitering hexes.
-   Claim your first Refuge (+40): What qualifies as a Refuge is nebulous, but you should be able to identify them by Reconnoitering hexes.
-   Reach Kingdom Size 10 (+40): Claim Hex a total of 9 times. You were going to do that anyway.
-   Establish Diplomatic Relations For the First Time (+60): This requires the Send Diplomatic Envoy Leadership Activity. You should be able to do this on your first Kingdom Turn.
-   All Eight Leadership Roles (+60): If you have a large party and/or your GM is letting you interact with Companions frequently, you might even reach this during your first Kingdom Turn.
-   Establish Your First Trade Agreement (+80): You want to do this as soon as humanly possible so that you can Trade Commodities and Manage Trade Agreements. You should be able to do this on your first Kingdom Turn.

You should be able to get 200 XP on your first kingdom turn, then another 120 from claiming 9 hexes which include at least 1 Landmark and 1 Refuge. That’s 360 total. Subtract that from 1000 and divide by 47.5, and we can hit level 2 in 13.6 Kingdom Turns, which is just slightly over a year. We’ll need at least 9 to hit Kingdom Size 10, so that makes sense

That’s way down from just under 7 years, but it’s still an insanely long time, and we’ve burned through the easy Milestones, so level 3 is even harder. It also doesn’t account for RP which you may have spent as part of Kingdom Activities or for the climbing DC for Clandestine Business which makes it impractical to use more than once every 3rd turn.

If we’ve reached the second tier of Kingdom Size, our Resource Die size upgrades to d6. With those same actions we’ll now have 12d6 instead of 11d4 (remember that you get more Resource Dice as you gain Kingdom Levels). With an average of 42 XP from converting RP, +10 from claiming hexes, and +10 average from events we’re not generating an average of 62 XP per turn. That gets us to level 2 in 16.1 turns, which is about a year and a half.

You can speed this up more with trade agreements. Look for every opportunity.

But I also have one more important tip: The Companion Jubilost volunteers to help run your Kingdom when you found it. If he’s assigned the role of Treasurer, you get access to a Leadership Action called [Process Hidden Fees](https://2e.aonprd.com/Actions.aspx?ID=1497) that lets you generate additional Resource Dice.

A typical use case is to have a party of 4 Process Hidden Fees a total of 4 times (once per PC Leader). Let’s assume for the sake of argument that everyone generates 1 Resource Die, but you can only use this every other turn, either because someone rolled a Failure or because you don’t want the automatically lowered degree of success for using it on back-to-back turns. That gives you an average of 2 additional Resource Dice per turn.

If we look at our math from above with an average of 5 additional RP, things get a lot better for us. Let’s assume that we won’t get Kingdom Size 10 and its +40 XP simply because we’re going too fast and can’t claim enough Hexes before we hit level 2. We’ll hit level 1 at around 12.1.

If we continue that strategy, we’ll then hit level 3 in 14.5 months, down from 16. So we’ll get from level 1 to level 3 in 26.6 months instead of 29.7. It’s not a huge reduction, but it’s 3 months earlier.

See “Managing Resource Points” for more on generating RP.

### Growth: How Fast?

Your kingdom’s size imposes an increase to the Control DC based on the number of hexes that your kingdom controls, increasing when the kingdom’s Size reaches 10, 25, 50, and 100. If you’re not prepared, the DC increase will make your life very hard. Of course, it also increases your Resource Die size and Commodity Storage, both of which can be very beneficial.

At first, rush to size 24 (Province), then consider sitting there until you’re ready. Increasing your Kingdom Level and building buildings with Item Bonuses to offset the increased Control DC will be crucial. The increased Resource Die size and Commodity Storage will give you a lot of flexibility and resources without the Control DC getting out of hand.

### Math: Kingdom Assurance and Trained Skills vs. Control DC

The math is bad. You will be almost perpetually 2 points behind Success if you maximize a skill.

We can also use this table as an idea of how effective a skill will be if we leave it at Trained or if we maximize it. You can get Circumstance Bonuses, Item Bonuses, and Status Bonuses up to +3 each without anything weird happening for a total of +9. 

At level 10 your Status Bonus and Item Bonus are both capped at +2, so we can get +7 on top of our checks. With that +7, a Trained skill succeeds on a d20 roll of 8, succeeding 65% of the time. At level 20, a Trained skill with the full extra +9 bonus succeeds on a d20 roll of 9, succeeding 60% of the time. That’s surprisingly okay, especially since it assumes +0 ability modifiers. Of course, it also doesn’t account for the increased Control DC from your Kingdom Size increasing, 

Level

Control DC

Maximum Proficiency

Outcome

Trained

Outcome

1

14

13

Failure

13

Failure

2

15

16 (Expert)

Success

14

Failure

3

16

17

Failure

15

Failure

4

18

18

Success

16

Failure

5

20

19

Failure

17

Failure

6

22

20

Failure

18

Failure

7

23

23 (Master)

Success

19

Failure

8

24

24

Success

20

Failure

9

26

25

Failure

21

Failure

10

27

26

Failure

22

Failure

11

28

27

Failure

23

Failure

12

30

28

Failure

24

Failure

13

31

29

Failure

25

Failure

14

32

30

Failure

26

Failure

15

34

33 (Legendary)

Failure

27

Failure

16

35

34

Failure

28

Failure

17

36

35

Failure

29

Failure

18

38

36

Failure

30

Failure

19

39

37

Failure

31

Failure

20

40

38

Failure

32

Failure

### Look for Chains of Bonuses

Stacking bonuses will make your checks considerably more reliable. If an Activity is important, walk backwards from that Activity to find bonuses that will enhance it.

For example: Supernatural Solution is really good. I want bonuses to that, so I search the Player Guide. Magic Shop provides a +1 Item Bonus, so I want to get an Item Shop. I’ll get a Status Bonus from certain Leadership Positions, so I make sure to Invest one of them.

That just leaves a Circumstance Bonus, which requires a bit more effort in this case. Supernatural Solution uses the Magic skill, which is based on the Culture Ability Score. Improve Lifestyle can get you a Circumstance Bonus to all Culture-based checks for a Kingdom Turn. Having a Mansion gets you an Item Bonus to Improve Lifestyle, so we want a Mansion.

### Magic is Great, Engineering is Trash

The Practical Magic Kingdom Feat is insanely good. Skill Increases are incredibly precious, and Practical Magic makes the Magic skill head and shoulders better than every other skill in the game, and it was already pretty good thanks to the Supernatural Solution activity.

Take Practical Magic at Kingdom Level 2 unless you’re running a Thaumocracy (you get it for free at level 1) and max Magic.

If you dumped Culture, this advice is bad and you should ignore it.

## Too Long; Didn’t Read

Okay, yeah, I respect that. Here’s a very quick summary of setting up your kingdom:

-   Charter: “Grant.” Boost Culture and Economy, Flaw into Loyalty.
-   Heartland: Either “Forest or Swamp” or “Lake or River” unless there’s a really good structure in place that you can build around. A Town Hall would be super nice.
-   Government: “Oligarchy” or “Thaumocracy”. Thaumocracy will be able to lean into magic right away, but Oligarchy will generate RP slightly faster to race to level 3. Boost Culture, Economy, and Loyalty regardless of which Government you pick.
-   Put the two free boosts into Culture and Economy. You should now have a +3 or +4 modifier in both Loyalty and Stability will be at +0.
-   When assigning Leadership Roles, make Amiri your Warden, Jubilost your Treasurer, and Valerie your General. Fill the remaining 5 with PCs or whichever NPC companions you can find. If You have 6 more than 5 PCs, drop Armiri and/or Valerie.
-   You will get 4 Kingdom Skills of your choice in addition to the 2 from your Government choice. Ensure that you’re Trained in Industry, Magic, Politics, and Trade. If you have more space, add Statecraft and possibly Boating.
-   On your first turn:
    -   [Collect Taxes](https://2e.aonprd.com/Actions.aspx?ID=1410), then Improve Lifestyles.
    -   Use your Leadership Activities to [Process Hidden Fees](https://2e.aonprd.com/Actions.aspx?ID=1497) once per player. Purchase Commodities to get at least 1 lumber. Use Clandestine Business. If you have encountered suitable groups, Send Diplomatic Envoy and Establish Trade Agreement with every outside group you can, as you’ll need those relationships on future turns. If you have remaining Leadership Activities, use Purchase Commodities to get Ore or Stone so that you can Trade Commodities next turn.
    -   Use your Region Activities to Claim Hex, then gather Food Commodities by whatever means you like. You need at least 1 Food, but more is better as insurance.
    -   Use your Civic Activity to build a Tenement so that your Settlement isn’t immediately Overcrowded.

That should at least buy you time to read the rest of this article. Good luck on turn 2!