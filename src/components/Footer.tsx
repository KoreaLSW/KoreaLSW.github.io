"use client";

import { motion } from "framer-motion";
import { Github, Mail, Phone, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-muted/30 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* 하단 정보 */}
          <div className="border-t border-border/50 pt-8">
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>by 이상우</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {currentYear} 이상우. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
