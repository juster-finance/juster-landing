<script setup>
import { reactive, ref } from "vue"
import Button from "@/components/ui/Button.vue"
import {links as linksConfig} from "@/config" 

const links = reactive([
	{
		name: "Docs",
		url: linksConfig.docs,
		icon: "package",
	},
	{
		name: "Roadmap",
		url: linksConfig.roadmap,
		icon: "compass",
	}
])

const showMobileMenu = ref(false)


</script>

<template>
	<header :class="[$style.wrapper]">

		<!-- Mobile menu -->
		<transition name="fade">
			<div v-if="showMobileMenu" @click="showMobileMenu = false" :class="$style.mobile_menu">
				<Flex direction="column" gap="16">
					<Flex direction="column" gap="16">
						<div :class="$style.mobile_menu__title">Resources</div>

						<div :class="$style.mobile_menu__links">
							<a :href="linksConfig.docs" :class="$style.mobile_menu__link">
								<div :class="$style.left">
									<Icon name="compass_1" size="14" />
									<span>Documentation</span>
								</div>

								<div :class="$style.mobile_menu__description">Everything you need is here</div>
							</a>
							<a :href="linksConfig.roadmap" :class="$style.mobile_menu__link">
								<div :class="$style.left">
									<Icon name="map" size="14" />
									<span>Roadmap</span>
								</div>

								<div :class="$style.mobile_menu__description">Explore the product path</div>
							</a>
							<a :href="linksConfig.github" target="_blank" :class="$style.mobile_menu__link">
								<div :class="$style.left">
									<Icon name="github" size="14" />
									<span>Source Code</span>
								</div>

								<div :class="$style.mobile_menu__description">Explore our code & contribute</div>
							</a>
						</div>
					</Flex>
				</Flex>
			</div>
		</transition>

		<div :class="$style.base">
			<div :class="$style.left">
				<div @click="showMobileMenu = !showMobileMenu" :class="$style.mobile_menu_icon">
					<Icon :name="showMobileMenu ? 'close' : 'menu'" size="16" />
				</div>

				<a href="/" :class="$style.logo" tabindex="-1">
					<Icon name="logo_symbol" size="28" />
				</a>
			</div>

			<div :class="$style.links">
				<a
					v-for="link in links"
					:key="link.name"
					:href="link.url"
					:class="[$style.link]"
				>
					<Flex align="center" gap="8" :class="$style.link_content"
						><Icon :name="link.icon" size="16" fill />{{ link.name }}</Flex
					>
			</a>
			</div>

			<div :class="$style.right">
				<Button type="primary" size="small" :link="linksConfig.demo">
					<Icon name="login" size="16" />
					Launch Demo
				</Button>
			</div>
		</div>
	</header>

</template>

<style module>
.wrapper {
	position: fixed;
	top: 0;
	width: 100%;
	min-height: 80px;

	display: flex;
	align-items: center;
	justify-content: center;

	border-bottom: 2px solid var(--border);
	z-index: 2;
}

.wrapper.testnet {
	border-bottom: 2px solid var(--yellow);
}

.testnetwork_warning {
	position: absolute;
	bottom: -20px;
	left: 50%;
	transform: translateX(-50%);

	display: flex;
	align-items: center;

	background: var(--yellow);
	border-radius: 0 0 6px 6px;
	height: 20px;

	padding: 0 8px;
}

.testnetwork_warning__label {
	font-size: 11px;
	line-height: 1;
	font-weight: 700;
	color: var(--text-black);
	text-transform: uppercase;
}

@supports (backdrop-filter: blur(5px)) {
	.wrapper {
		backdrop-filter: blur(10px);
	}
}

@supports not (backdrop-filter: blur(5px)) {
	.wrapper {
		background: var(--app-bg);
	}
}

.base {
	display: flex;
	align-items: center;
	justify-content: space-between;

	max-width: 1250px;
	width: 100%;

	margin: 0 32px;
}

.right {
	display: flex;
	align-items: center;
}

.base .left {
	display: flex;
	align-items: center;
}

.logo {
	display: flex;
	gap: 12px;
}

.logo:focus {
	box-shadow: none;
}

.logo svg {
	fill: var(--text-primary);

	transition: fill 0.4s ease;
}

.logo:hover svg {
	fill: var(--brand);
}

.links {
	position: absolute;
	left: 50%;
	transform: translateX(-50%);

	display: flex;
	align-items: center;

	perspective: 2000px;
}

.link {
	display: flex;
	align-items: center;
	gap: 8px;

	font-size: 14px;
	line-height: 1;
	font-weight: 600;
	color: var(--text-secondary);
	fill: var(--text-tertiary);

	padding: 10px;
	cursor: pointer;

	transition: all 0.2s ease;
}

.link.active {
	color: var(--text-primary);
	fill: var(--text-primary);
}

.link.active .link_content {
	background: var(--opacity-05);
}

.link:hover {
	color: var(--text-primary);
	fill: var(--text-primary);
}

.link_content {
	height: 34px;

	border-radius: 8px;

	padding: 0 12px 0 10px;

	transition: background 0.2s ease;
}

.reward_alert {
	margin-right: 8px;
}

.avatar {
	display: flex;
	width: 24px;
	padding: 4px;
	box-sizing: content-box;

	color: var(--text-secondary);
	fill: var(--text-tertiary);

	background: var(--btn-secondary-bg);
	border-radius: 6px;

	transition: all 0.2s ease;
}

.avatar:hover {
	color: var(--text-primary);
	fill: var(--text-primary);
	background: var(--btn-secondary-bg-hover);
}

.avatar:active {
	transform: translateY(1px);
}

@media (max-width: 700px) {
	.base {
		margin: 0 16px;
	}

	.logo img {
		display: none;
	}

	.links {
		display: none;
	}
}

/* Mobile navigation */
.mobile_menu {
	display: none;

	position: absolute;
	top: 80px;
	left: 0;
	right: 0;

	padding: 20px 24px 20px 24px;
	border-bottom: 1px solid var(--border);
	background: var(--app-bg);

	z-index: 100;
}

.mobile_menu__title {
	font-size: 13px;
	line-height: 1.1;
	font-weight: 600;
	color: var(--text-secondary);
}

.mobile_menu__links {
	display: flex;
	flex-direction: column;
	gap: 16px;
}

.mobile_menu__link {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.mobile_menu__link .left {
	display: flex;
	align-items: center;
	gap: 10px;
}

.mobile_menu__link .left svg {
	padding: 5px;
	border-radius: 5px;
	background: rgba(255, 255, 255, 0.06);
	fill: var(--text-secondary);
	box-sizing: content-box;
}

.mobile_menu__link .left span {
	font-size: 13px;
	line-height: 1.1;
	font-weight: 600;
	color: var(--text-primary);
}

.mobile_menu__description {
	font-size: 13px;
	line-height: 1.1;
	font-weight: 500;
	color: var(--text-tertiary);
}

.mobile_menu_icon {
	display: none;
	align-items: center;
	justify-content: center;

	width: 32px;
	height: 32px;
	border-radius: 8px;
	background: var(--btn-secondary-bg);

	transition: all 0.2s ease;

	margin-right: 16px;
}

.mobile_menu_icon svg {
	fill: var(--text-primary);
}

.mobile_menu_icon:hover {
	background: var(--btn-secondary-bg-hover);
}

.mobile_menu_icon:active {
	transform: translateY(1px);
}

@media (max-width: 700px) {
	.mobile_menu {
		display: initial;
	}

	.mobile_menu_icon {
		display: flex;
	}
}
</style>
