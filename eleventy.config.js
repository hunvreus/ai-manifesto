export default function (eleventyConfig) {
  eleventyConfig.ignores.add("dist/**");
  eleventyConfig.ignores.add("node_modules/**");
  eleventyConfig.ignores.add("docs/**");
  eleventyConfig.addPassthroughCopy({ public: "." });
  eleventyConfig.addGlobalData("layout", "base.njk");
  eleventyConfig.addGlobalData("permalink", "/");
  eleventyConfig.addGlobalData("title", "AI-Augmented Software Development Manifesto");
  eleventyConfig.addGlobalData("description", "A manifesto for building software with AI without surrendering human taste, judgment, and ownership.");
  eleventyConfig.addGlobalData("siteUrl", process.env.SITE_URL || "https://ai-manifesto.hunvreus.workers.dev/");
  eleventyConfig.addGlobalData("socialImage", "og.png");

  return {
    templateFormats: ["md"],
    dir: {
      input: ".",
      includes: "_includes",
      output: "dist"
    }
  };
}
