---
url: https://rpgbot.net/dnd5/characters/classes/wizard/subclasses/evoker/
archived_at: 2026-04-01T03:05:30.146Z
---

# Evoker Wizard 5e: DnD 5e Subclass Guide

> _I’m Torgue, and I am here to ask you one question, and one question only: EXPLOSIONS?!_
> 
> [Mr. Torgue](https://www.youtube.com/watch?v=V-GKwfHC9jQ) – Borderlands

## Evoker Wizard Introduction

The Evoker Wizard’s job is to indiscriminately cover the battlefield in heavily damaging magic. The School of Evocation is all about getting to use those big dangerous spells like Fireball without having to worry about friendly fire. Never worry about your allies’ positioning again, as they simply become immune to your Sculpted Spells.

One of the many great things about being an Evoker Wizard is _being a Wizard_. We’re better than other Wizards at damage magic, but we’re also still great at all the area control effects that come standard with all Wizards. Throw down a Hold Person one round, then drop a Fireball on everyone next round without killing all your friends. That’s teamwork.

The example Evoker build down below plays the role of a Blaster, picking as many save for half damage AoE spells as possible to make the most of Sculpt Spell. If you want to hang back and get to use all of those great big damage spells like Fireball without having to worry about your allies, give Evoker a try.

## Table of Contents

-   [Evoker Wizard Introduction](#introduction)
-   [Disclaimer](#disclaimer)
-   [School of Evocation Features](#features)
-   [School of Evocation Ability Scores](#school-of-evocation-ability-scores)
-   [School of Evocation Races](#school-of-evocation-races)
-   [School of Evocation Feats](#school-of-evocation-feats)
-   [School of Evocation Weapons and Armor](#school-of-evocation-weapons-and-armor)
-   [School of Evocation Multiclassing](#school-of-evocation-multiclassing)
-   [Example School of Evocation Build – The Grenadiers March](#example-school-of-evocation-build-the-grenadiers-march)
    -   [Abilities](#abilities)
    -   [Race](#race)
    -   [Background](#background)
    -   [Skills and Tools](#skills-and-tools)
    -   [Feats](#feats)
    -   [Levels](#levels)

## Disclaimer

RPGBOT uses the color coding scheme which has become common among Pathfinder build handbooks, which is simple to understand and easy to read at a glance.

-   Red: Bad, useless options, or options which are extremely situational. Nearly never useful.
-   Orange: OK options, or useful options that only apply in rare circumstances. Useful sometimes.
-   Green: Good options. Useful often.
-   Blue: Fantastic options, often essential to the function of your character. Useful very frequently.

We will not include 3rd-party content, including content from DMs Guild, in handbooks for official content because we can’t assume that your game will allow 3rd-party content or homebrew. We also won’t cover Unearthed Arcana content because it’s not finalized, and we can’t guarantee that it will be available to you in your games.

The advice offered below is based on the current [State of the 2014 DnD 5e Character Optimization Meta](https://rpgbot.net/dnd5/characters/state-of-the-meta/) as of when the article was last updated. Keep in mind that the state of the meta periodically changes as new source materials are released, and the article will be updated accordingly as time allows.

## School of Evocation Features

1.  Evocation Savant: Standard for PHB wizard subclasses. Strangely, this feature incentivizes you to use your two free spells learned per level to learn literally anything except spells from your favorite school.
2.  Sculpt Spells: Friendly fire happens inevitably when you have an evoker in the party. This goes a long way to cut down on the problem, and you should abuse the fact that your allies are immune to your spells wherever possible.
    
    There’s some weird nuance here that’s easy to overlook: While this is clearly intended to protect allies from Burning Hands, Fireball, and other such AOE damage options, the protection doesn’t end after the initial effect of the spell. Creatures are protected from the spell’s effects for the spell’s full duration. This means that your allies can comfortably walk around in the areas of spells like Sickening Radiance, potentially dragging enemies about inside the area to force them to take damage. You could even cast Otiluke’s Freezing Sphere, designate your allies as protected by Sculpt Spells, then send them off with pockets full of frozen spheres to smash at their feet in a room full of enemies. Honestly, I don’t think this was intended when WotC wrote School of Evocation. Much like Empowered Evocation, I think that they meant for Sculpt Spells only to apply to the initial effects. But it’s been 5+ years and we haven’t gotten errata or tweets from Jeremy Crawford, so it appears that Sculpt Spells works as I’ve described it until someone tells us otherwise.
    
3.  Potent Cantrip: Acid Splash and Poison Spray are the only damaging Wizard cantrips in the PHB which require a saving throw, but other supplements have dramatically increased your options. Additionally, this feature is not limited to Wizard cantrips, in case you happen to have something from another class, feat, or a racial feature. This is nice insurance, and it encourages you to use saving throw cantrips like Frostbite instead of attack cantrips like Fire Bolt because the guaranteed half damage means that your DPR is calculated with the formula (\[Dice Average\]\*(\[Chance to Fail Save\]+0.5\*(1-\[Chance to Fail Save\]))). This formula applies to any save for half effect, so it’s also relevant to a lot of leveled spells.
    
    An example at the level we get this: with Toll the Dead (2d12, avg. 13) and a 60% Chance the target fails: (13\*(0.6+0.5\*(0.4)))=10.4 Expected DPR. If instead the target only failed the save 50% of the time: (13\*(0.5+0.5\*(0.5)))=9.75 Expected DPR. That’s only a difference of 0.65 DPR.
    
    A firebolt at the same level, following the expected math for an attack roll with 2d10 damage on a hit, comes to 7.7 DPR and does nothing on a miss.
    
4.  Empowered Evocation: A bonus to damage like this is a considerable boost, especially for your low-level spells like Burning Hands, which can still be decent damage sources at a low spell slot cost.
    
    According to [Jeremy Crawford](http://www.sageadvice.eu/2015/06/28/scorching-ray-dd-errata/) back in 2015, this bonus applies to each missile of magic missile and to all targets of an AOE, but only to one attack for multi-attack spells like Scorching Ray. If Empowered Evocation applies to each missile, Magic Missile becomes very powerful. This conflicts with Crawford’s more recent rulings, where he has ruled that each missile from Magic Missile is a separate damage roll, so similar damage bonuses only get applied to one of the missiles. Personally I think the more-recent ruling makes more sense, but discuss it with your DM. For the magic missile case, see our Practical Guide to [Magic Missile](https://rpgbot.net/dnd5/characters/spells/magic-missile/).
    
5.  Overchannel: This is a great way to get more mileage out of reliable lower-level spells like Magic Missile and Fireball at a level where your higher-level spells would generally eclipse them. Just be sure to have a Cleric handy when you start taking damage. RAW, the damage is maximized every time that the spell deals damage, which makes spells like Wall of Fire especially powerful. However, according to [Jeremy Crawford](https://www.sageadvice.eu/2016/12/17/if-i-overchannel-bigbys-hand/) the effect was intended to only apply to the first damage roll for the spell, so sticking to Fireball is likely your best choice. Check with your DM about how they want to handle things.

## School of Evocation Ability Scores

Wizards need Intelligence for Save DCs, Constitution for HP and Concentration saves, and Dexterity, for AC. Evokers follow this trend.

Str: Dump it. We got Wizard powers.

Dex: We want some of this for AC so we can maybe sometimes not get hit.

Con: More HP. Better Concentration saves. Good all around.

Int: Setting Save DCs and Spell Attack Bonus, as well as improving Empowered Evocation. Get this to 20 quickly.

Wis: These saving throws generally suck to fail, so if we have anything left after the rest, put a point here.

Cha: Dump it. Let someone else chit chat. We’re here for Explosions.

**Point Buy**

**Standard Array**

Str

8

10

Dex

15

13

Con

15

14

Int

15

15

Wis

8

12

Cha

8

8

## School of Evocation Races

As always, for anything not listed below, consult the [Wizard Races Breakdown](https://rpgbot.net/dnd5/characters/classes/wizard/races/).

Evokers want the same thing as other Wizards when it comes to race, an Intelligence boost. However, post TcoE, any race can give a boost to Intelligence, which means we have to look deeper into racial traits. Because the Evoker will focus so much of their magic on offense, we can get some mileage out of racial traits that broaden our Party support capabilities.

-   Astral Elf[SJAiS](/dnd5/abbreviations/): Sacred Flame is a good source of Radiant damage and Potent Cantrip is not restricted to Wizard Cantrips.
-   Earth Genasi[MMoM](/dnd5/abbreviations/): Blade Ward is an ok cantrip, especially if we can use it as a bonus action, but we’re here for Pass Without Trace, which is some real party utility.
-   Kobold[MMoM](/dnd5/abbreviations/): Draconic Cry can give your party some Advantage as a bonus action. We’re not already using that bonus action, outside of some specific spell options, so might as well have a fun little party booster in our pocket.
-   Variant Human[PHB](/dnd5/abbreviations/): An extra feat, such as Resilient (Constitution), can always be nice.

## School of Evocation Feats

The [Wizard Handbook](https://rpgbot.net/dnd5/characters/classes/wizard/#feats) already covers feats in great detail.

Like most full casters, Evokers just want to rush their casting stat, Intelligence, to 20. After that, we either shore up our defenses or go for something else fun.

-   Elemental Adept[PHB](/dnd5/abbreviations/): This feat is kind of a trap for an evoker because an evoker should have spells of multiple damage types instead of relying on one type of damage. Besides that, the main problem you might face is immunity, which this feat does nothing about.

## School of Evocation Weapons and Armor

Without Multiclassing, Evokers won’t be proficient in [Armor](https://rpgbot.net/dnd5/characters/classes/wizard/#armor), and [Weapons](https://rpgbot.net/dnd5/characters/classes/wizard/#weapons) don’t do more than Cantrips.

## School of Evocation Multiclassing

-   Death Cleric: Reaper combined with Toll the Dead combined with Potent Cantrip is an interesting combo if you can spare the 13 Wisdom to multiclass Cleric.

## Example School of Evocation Build – The Grenadiers March

> Remember kids, an arrow might have your name on it, but a Fireball is addressed “To whom it may concern”.
> 
> Renato Corvato – Random Youtube Comment

As mentioned above: The DPR Formula for Half on a Save is (\[Dice Average\]\*(\[Chance to Fail Save\]+0.5\*(1-\[Chance to Fail Save\]))).

The quick explanation of this formula is that the percentage change in expected damage will be smaller than the percentage change in how often the target fails the save. Put another way, if the target succeeds on the save 60% of the time, the DPR is 70% of the dice average, but if we increase our Intelligence enough to increase the DC by 2 points, the same creature now has a 50-50 chance to succeed or fail, a change of 10%, but the DPR is 75% of the dice average, a change of only 5%.

You can also use this to compare targeting different saves. This means two things: First, that which saving throw we target matters less when we’re only trying to do damage and second, that delaying our Intelligence increases to grab an important feat doesn’t hurt our DPR significantly.

What does matter however, is our [damage types](https://docs.google.com/spreadsheets/d/1X70jdBX0X0n_5V7stc1_kYERXLNGJIbdjhl3BUbKxQI/edit#gid=0). A few Thunder damage spells like Thunderwave and Shatter, which target Con, are a good way to mix it up and avoid common resistances, like Fire. At later spell levels, Radiant damage from spells like Sickening Radiance or Dawn fills in the same niche, being a far less resisted damage type, but targeting Con.

### Abilities

Now, just because I said we can delay Intelligence growth for a feat doesn’t mean we aren’t putting points into Intelligence at creation. On the contrary, the above conclusion is about the difference between staying at 16 for something like Warcaster and moving up to 18 and 20 as soon as possible. We’re taking Variant Human with a +1 in Dex and Int and taking Resilient (Con) as our first level feat.

**Point Buy**

**Racial Adjustments**

**Level 20**

Str

8

8

8

Dex

15

16

20

Con

15

16

16

Int

15

16

20

Wis

8

8

8

Cha

8

8

8

### Race

We’re taking Variant Human in order to take Resilient (Constitution) at first level. Alternatively, we could switch that around with taking War Caster at fourth level if we want to.

Optionally, we could start with our first level in Artificer instead of Wizard to get Constitution proficiency and Medium Armor, opening up different options for our racial choice. Another hidden advantage to such a build is having preparation slots for both classes, freeing up some space on our Wizard preparation list.

### Background

As an Intelligence caster, we already have the motivation to increase Intelligence, therefore we will take Sage as a background for the Arcana and History skills, but we’ll modify it slightly to create a custom background and trade out one of the languages for a tool. We’re taking Flute proficiency so we can actually play the [Grenadiers March](https://www.youtube.com/watch?v=AvU8LaE0-xw) as the fantasy version of a Grenadier, because it’s fun and we can always just cast Comprehend Languages later.

### Skills and Tools

Variant Human comes with one skill proficiency, so we’ll choose Nature as it is the only Intelligence skill not on the Wizard list. Wizard will give us the ability to choose Investigation and Religion. Sage finishes off our list with Arcana and History.

Together this list gives us a good shot at passing any Knowledge tests as well as a good eye to find finer details during an in-depth Investigation.

### Feats

Variant Human allows for a feat at first level, we have chosen Resilient (Constitution) for +1 Con and Proficiency in Con saves. Alternatively, we could swap this choice with our fourth level choice, War Caster.

At fourth level, War Caster is our feat of choice. We’re an Evoker, firing off high damage AoE spells that still do half on a save so being behind on a save DC hurts far less for us than say an Enchanter who is typically using spells that do nothing on a failed save. This means that having better Concentration checks is something we can afford to take the moment to do.

At eighth and twelfth level, we take our ASIs for +2 Intelligence each, pushing to 20 to boost spell attacks and spell save DCs.

At sixteenth and nineteenth levels, we take more ASIs for +2 Dexterity each time, pushing to 20 to boost our AC.

### Levels

Levels

Feats and Features

Notes and Tactics

1

Variant Human Feat: Resilient (Constitution)

Arcane Recovery

Spellcasting  
\-Cantrips  
–Mind Sliver  
–Thunderclap  
–Toll the Dead  
\-1st-level Spells  
–[Magic Missile](https://rpgbot.net/dnd5/characters/spells/magic-missile/)  
–Mage Armor  
–Shield  
–[Silvery Barbs](https://rpgbot.net/dnd-5es-silvery-barbs/)  
–Sleep  
–Thunderwave

Starting as a Variant Human, we gain a bonus feat and for that we choose Resilient (Constitution). Taking this gives us a boost to our Constitution score and proficiency in the save as well.

For cantrips, we’re going to load up on three offensive options because these give us some good tactical options.

Are we trying to set up a strong debuff on the target? Mind Sliver will give an edge to the next saving throw the target has to make.  
Are we next to a pair of foes we don’t want to be? Well drop a Thunderclap (and hopefully Misty Step away).

Is it just a damage race? Bing-bong goes Toll the Dead.

As for first leveled spells, we’re taking an array of Defensive options (Mage Armor and Shield), Damage spells (Magic Missile and Thunderwave), and Debuff Utility (Silvery Barbs and Sleep).

2

School of Evocation  
\-Evocation Savant  
\-Sculpt Spells

Spellcasting  
\-1st-level Spells  
–Absorb Elements  
–Tasha’s Caustic Brew

At second level we take our tradition, the School of Evocation.

With Sculpt Spells we can now do the thing that everyone else gets yelled at for: Drop deadly AoEs on the party without getting everyone killed.

Just be wary of how this works: it has to be an Evocation spell and we can protect a number of creatures up to 1+ the spell’s level. So a Thunderwave spell could ignore two targets if cast at 1st-level, and if upcast to 2nd it could ignore three targets.

But a Stinking Cloud or a Web are both Conjuration spells so we can’t make anyone immune to these effects. That doesn’t mean we shouldn’t take spells like that (we should because those are great spells): it means we have to remember what spells can be safely tossed into a melee slugfest.

3

Spellcasting  
\-2nd-level Spells  
–Shatter  
–Tasha’s Mind Whip

We get 2nd-level spells, and we’re continuing to be a blasty Evoker by choosing Shatter, but we’re also picking up Tasha’s Mind Whip.

Shatter should be self explanatory: it’s like a smaller Fireball but with Thunder damage. Don’t let the Con save scare you, that doesn’t actually move the DPR meter much for save-for-half spells like this, and the damage type diversity will be more than welcome when you run up against a Fire resistant or immune foe.

Tasha’s Mind Whip on the other hand targets Intelligence which is typically a lower stat and does some good single-target damage with a particularly debilitating rider on failed saves, but still at least does half damage if the target succeeds.

4

Feat: War Caster

Spellcasting  
\-2nd-level Spells  
–Enhance Ability  
–Misty Step  
–Web

We can pick up some utility magic like Enhance Ability, Misty Step, or Web.

We also take the War Caster feat so that we have a better chance to hold our Concentration if we get smacked. It’s pretty good insurance.

5

Spellcasting  
\-3rd-level Spells  
–Fireball  
–Lightning Bolt  
–Minute Meteors

Just Fireball. Only Fireball. Not really, but sometimes yeah you should use Fireball. For everything else, there’s Lightning Bolt.

Minute Meteors are worth considering. It’s easy to look at the damage and see that it’s 12d6 damage split into discrete 2d6 chunks that can be handed out as bonus actions, up to 4d6 per use.

That is 50% more damage than Fireball, but spread over at least 3 rounds while also occupying our Concentration. Because it lasts 10 minutes, if we can get it spinning before a fight starts then nothing is stopping us from weaving meteors in between other spells.

6

Potent Cantrip

Spellcasting  
\-3rd-level Spells  
–Fly  
–Hypnotic Pattern

Potent Cantrip is particularly nice. It just means we always have a way to do some automatic damage. Yes, leveled spells will be stronger, but Cantrips are free and sometimes we need to do things like Misty Step.

Fly and Hypnotic Pattern may not be our usual kind of blow everything up spells, but we welcome them the same.

Fly is Fly. We all know how good it is to fly. Most big name evocation spells don’t require Concentration, so it’s easy to commit Concentration to Fly and then spend all of your time raining damage on things.

Hypnotic Pattern can really mess up a group of enemies by taking some of them out of the encounter. Put this up early and then when about half are dead, try to line up a Lightning Bolt across the rest.

7

Spellcasting  
\-4th-level Spells  
–Sickening Radiance  
–Wall of Fire

We have to be extra careful with the way Wall of Fire works. Yes, it has a saving throw, but only when placing the wall for the first time.

We can protect our allies from that, but there’s no save for being in the wall or on the hot side of the wall, so Sculpt Spell doesn’t protect anyone from that damage.

Sickening Radiance on the other hand, is ripe for Sculpt Spell abuse. Make up to five creatures immune to the spell and do whatever you can to keep foes locked down inside the danger zone.

8

ASI: Intelligence +2 (16=>18)

Spellcasting  
\-4th-level Spells  
–Greater Invisibility  
–[Polymorph](https://rpgbot.net/dnd5/characters/spells/polymorph/)

Intelligence for DCs and Spell Attacks.

9

Spellcasting  
\-5th-level Spells  
–Cone of Cold  
–Dawn  
–Synaptic Static

Cone of Cold and Dawn are good options. 

While Dawn and Sickening Radiance do the same damage and Sickening Radiance has terrible rider effects that kill your foes, Dawn can be moved as a bonus action on your turn. This may be useful in niche scenarios, but 9 times out of 10, you’ll just use Sickening Radiance.

Synaptic Static is a strong AoE spell but I also have to express caution. This spell is Enchantment, so it can’t be Sculpted. We’ll have to actually avoid the team with this spell. This is worth it though, between the psychic damage type, the Intelligence saving throw, and most importantly giving the targets a -1d6 to attack rolls for a minute.

10

Empowered Evocation

Spellcasting  
\-5th-level Spells  
–Wall of Force  
–Wall of Stone

Add Intelligence to damage for Evocation spells. It’s nice, and it does apply to AoEs.

While it does not appear that noticeable on a spell like Fireball when only looking at the 8d6, it does apply to every target of an AoE, so the more targets, the more times that modifier gets added.

11

Spellcasting  
\-6th-level Spells  
–Chain Lightning  
–Sunbeam  
–Frozen Sphere

Chain Lightning is particularly strong, doing 10d8+Int per target to up to 4 targets. Good if we need to get damage down right now and the enemies are in an unusual arrangement or if we need Lightning typed damage, but against 5 or more foes, an upcast Fireball would be doing 11d6+Int and we can just Sculpt around allies.

Sunbeam is a neat spell. Sure, it uses our Concentration and it targets Con, but we can fire line lasers for a minute and that’s cool. Also, because it’s half on a save, being Con doesn’t matter as much.

Frozen Sphere has a fun interaction where ellies can pick up and later detonate the sphere, safely protected from the damage by Sculpt Spell.

12

ASI: Intelligence +2 (18=>20)

Spellcasting  
\-6th-level Spells  
–Disintegrate  
–True Seeing

Maximum Intelligence means Maximum Spell DCs. Not that we care too much for all our half on a save spells, but we do have other spells that this helps with.

13

Spellcasting  
\-7th-level Spells  
–Crown of Stars  
–Delayed Blast Fireball  
–Whirlwind

Crown of Stars is a decent way to get some consistent use out of bonus actions. The spell lasts an hour and doesn’t use Concentration.

Delayed Blast Fireball has a very interesting interaction with Sculpt Spell. Because the creatures you choose automatically succeed on saves, a creature of your choice will automatically succeed on the save to pick up the fireball and can then deliver it even further (potentially multiple times), maybe down a winding corridor or something. 22d6 isn’t quite Meteor Swarm, but it’s a ton of damage.

Whirlwind is a small AoE and does less damage than one might assume for a 7th-level spell, but has some interesting effects that make it worth using. In particular, as an Evocation spell, this is pretty much the only crowd control effect that we can also designate targets to be immune.

This restrains targets and carries them along with the whirlwind, allowing your allies (who are excluded thanks to Sculpt Spells) to safely fight within the whirlwind while you collect every enemy in the encounter into a small area before dropping low-cost AOE spells on them. Remember that Restrained also imposes Disadvantage on Dexterity saves.

14

Overchannel

Spellcasting  
\-7th-level Spells  
–Forcecage  
–Plane Shift

Overchannel for Maximum Damage. Good effect. Don’t push it though.

Combine it with a continuous effect like Dawn or Sickening Radiance to get the most out of it (see the subclass features section above; there’s some rules discussion here). Even if you just max out a 5th-level Fireball, that’s 60 damage (10d6 maximized).

15

Spellcasting  
\-8th-level Spells  
–Maddening Darkness  
–Sunburst

We’re getting to the point where there’s not very many Evocation spells left, but comically, we have our choice of light and dark.

Maddening Darkness is similar to regular Darkness in that it is a magical darkness that foils Darkvision, except that it also does Psychic damage. Our Sculpt Spell targets can ignore the damage, but not the darkness.

Sunburst on the other hand, is a single blast of radiant damage that can blind targets that fail the save. Kind of like a bigger angrier fireball.

16

ASI: Dexterity +2 (16=>18)

Spellcasting  
\-8th-level Spells  
–Clone  
–Maze

Not much to say other than we want more AC.

17

Spellcasting  
\-9th-level Spells  
–Wish  
–Meteor Swarm

[Wish](https://rpgbot.net/dnd5/characters/spells/wish/). Because I don’t get to publish this article without it.

Meteor Swarm is the only Evocation spell here, but we can pick a whole ten targets to protect from the spell. Which is good because we don’t want our team getting flattened under 40d6 of damage.

18

Spell Mastery  
\-Shield  
\-Misty Step

Honestly, infinite Shields is bonkers and worth being one of our Spell Mastery choices.

For the 2nd-level choice, Misty Step is a great option. Being able to just bonus action teleport whenever we need to is very helpful.

19

ASI: Dexterity +2 (18=>20)

And that will cap out our AC. With Mage Armor, this puts us at 18 AC. With Shield, we can go up to 23.

20

Signature Spells  
\-Fireball  
\-Lightning Bolt

It’s free damage. There’s not much else to say. Blow things up.