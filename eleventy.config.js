export default function (eleventyConfig) {
  eleventyConfig.ignores.add("dist/**");
  eleventyConfig.ignores.add("node_modules/**");
  eleventyConfig.addGlobalData("layout", "base.njk");
  eleventyConfig.addGlobalData("permalink", "/");
  eleventyConfig.addGlobalData("title", "AI-Augmented Software Development Manifesto");

  return {
    templateFormats: ["md"],
    dir: {
      input: ".",
      includes: "_includes",
      output: "dist"
    }
  };
}
