# Welcome

To get started install your preferred kitten

```
npm install 🐱
```

---

# Veritcal Rhythm

##### _(or the secret to good design)_

Veritcal rhythm defines the base units you should round to. You can imagine a series of vertial lines your text, components, and all visual elements should start on or evenly fit between.

---

# Print layout

Full bleed is a print term used to describe visual elements that extend all the way to the edge. This is a good way to think about any layout. While you may be used to defining padding on a component level you'll get more reuse and more consisent designs by offloading margins and padding to a seperate class of presentation components.

```js
<FullBleed>
  <ContentArea>
    <AdditionalLayoutCriteria />
  </ContentArea>
</FullBleed>
```

This means defining your application as a series of stacked rows. In its simplest form this is

```js
<Header/>
<Section/>
<Section/>
<Section/>
<Footer/>
```

Globally defined elements, like a sidebar act as a subdivison on the root layout, but the same rules apply -- stacked rows each managing their padding to the full width of the page.

```js
<SidebarDivisionLayout>
  <Header/>
  <Section …/>
  <…/>
  <Footer/>
</SidebarDivisionLayout>
<SidebarLayout>
  <Header />
  <Section>
  <Footer />
</SidebarLayout>
```
